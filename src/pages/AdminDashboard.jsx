import { Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useOrderStore from '../store/useOrderStore';
import useProductStore from '../store/useProductStore';
import { formatPrice } from '../utils/formatPrice';

export default function AdminDashboard() {
  const { orders, fetchOrders } = useOrderStore();
  const { products, fetchProducts } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.status === 'pending').length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
  };

  const recentOrders = orders.slice(0, 5);

  const statsCards = [
    {
      title: 'Total Productos',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      link: '/admin/products',
    },
    {
      title: 'Órdenes Totales',
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: 'bg-green-500',
      link: '/admin/orders',
    },
    {
      title: 'Órdenes Pendientes',
      value: stats.pendingOrders,
      icon: Users,
      color: 'bg-yellow-500',
      link: '/admin/orders',
    },
    {
      title: 'Ingresos Totales',
      value: formatPrice(stats.totalRevenue),
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-green-100 text-green-800',
      delivered: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || colors.pending;
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <div
            key={index}
            onClick={() => stat.link && navigate(stat.link)}
            className={`bg-white rounded-xl shadow-md p-6 ${
              stat.link ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Órdenes Recientes</h2>
          <button
            onClick={() => navigate('/admin/orders')}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Ver todas
          </button>
        </div>

        {recentOrders.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No hay órdenes todavía</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Cliente
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Fecha
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Total
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-900">
                      #{order.id.slice(0, 8)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {order.customerInfo?.name || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {formatPrice(order.total)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
