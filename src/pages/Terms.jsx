import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-korzen-charcoal mb-8 border-b border-korzen-olive/20 pb-4">
            Regulamin Sklepu
          </h1>
          
          <div className="prose prose-stone max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">I. Postanowienia ogólne</h2>
              <p className="mb-4">
                1. Sklep internetowy działający pod adresem pracowniakorzen.pl prowadzony jest przez Pracownię Rzemieślniczą KORZEŃ.
              </p>
              <p className="mb-4">
                2. Niniejszy Regulamin określa zasady korzystania ze Sklepu Internetowego, w szczególności warunki składania zamówień i zawierania umów sprzedaży.
              </p>
              <p className="mb-4">
                3. Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta. Składanie zamówień przez Klienta na produkty znajdujące się w asortymencie Sklepu możliwe jest albo po założeniu Konta, albo przez podanie niezbędnych danych osobowych i adresowych umożliwiających realizację Zamówienia bez zakładania Konta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">II. Produkty i Zamówienia</h2>
              <p className="mb-4">
                1. Produkty w sklepie są wykonywane ręcznie, często z materiałów naturalnych (drewno) lub z recyklingu (szkło). W związku z tym, poszczególne egzemplarze mogą nieznacznie różnić się od siebie usłojeniem, barwą czy fakturą. Nie stanowi to wady produktu, lecz świadczy o jego unikalności.
              </p>
              <p className="mb-4">
                2. Ceny produktów podane na stronie internetowej Sklepu są cenami brutto (zawierają podatek VAT).
              </p>
              <p className="mb-4">
                3. Warunkiem realizacji zamówienia jest podanie przez Klienta danych pozwalających na weryfikację Klienta i odbiorcy towaru.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">III. Płatność i Dostawa</h2>
              <p className="mb-4">
                1. Klient ma możliwość zapłaty za zamówienie przelewem tradycyjnym, szybkim przelewem online lub systemem BLIK.
              </p>
              <p className="mb-4">
                2. Zamówienia są realizowane na terenie Rzeczypospolitej Polskiej.
              </p>
              <p className="mb-4">
                3. Koszty dostawy pokrywa Klient, chyba że oferta Sklepu stanowi inaczej.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">IV. Odstąpienie od umowy</h2>
              <p className="mb-4">
                1. Konsument ma prawo odstąpić od umowy w terminie 14 dni bez podania przyczyny.
              </p>
              <p className="mb-4">
                2. Prawo to nie przysługuje w przypadku produktów nieprefabrykowanych, wyprodukowanych według specyfikacji konsumenta (produkty personalizowane).
              </p>
              <p className="mb-4">
                3. Szczegółowe zasady zwrotów opisane są w zakładce "Zwroty i Reklamacje".
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">V. Ochrona danych osobowych</h2>
              <p className="mb-4">
                1. Administratorem danych osobowych jest Sprzedawca.
              </p>
              <p className="mb-4">
                2. Dane osobowe przetwarzane są w celach realizacji zamówienia oraz, w przypadku wyrażenia zgody, w celach marketingowych.
              </p>
              <p>
                3. Szczegółowe informacje dotyczące przetwarzania danych znajdują się w Polityce Prywatności.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
