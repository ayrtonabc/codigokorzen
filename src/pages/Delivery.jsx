import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-korzen-charcoal mb-8 border-b border-korzen-olive/20 pb-4">
            Dostawa i Płatności
          </h1>
          
          <div className="prose prose-stone max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Metody Dostawy</h2>
              <p className="mb-4">
                Wszystkie nasze produkty są starannie pakowane, aby bezpiecznie dotarły do Twojego domu. 
                Dbamy o to, aby używać ekologicznych materiałów do pakowania, zgodnie z naszą filozofią.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Kurier InPost</strong> - 18,00 zł (1-2 dni robocze)</li>
                <li><strong>Paczkomaty InPost</strong> - 15,00 zł (1-2 dni robocze)</li>
                <li><strong>Kurier DPD</strong> - 20,00 zł (1-2 dni robocze)</li>
              </ul>
              <p className="text-sm italic">
                * Czas realizacji zamówienia wynosi zazwyczaj 2-5 dni roboczych, ponieważ wiele produktów tworzymy lub wykańczamy na bieżąco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Metody Płatności</h2>
              <p className="mb-4">
                Oferujemy bezpieczne i wygodne metody płatności:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Przelew tradycyjny</strong> - dane do przelewu otrzymasz w mailu potwierdzającym zamówienie.</li>
                <li><strong>BLIK</strong> - szybka i wygodna płatność telefonem.</li>
                <li><strong>Szybkie przelewy online</strong> - obsługiwane przez bezpiecznego operatora płatności.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Dane do przelewu</h2>
              <div className="bg-stone-50 p-6 rounded-md border border-stone-200">
                <p className="font-bold">KORZEŃ Pracownia Rzemieślnicza</p>
                <p>ul. Przykładowa 123</p>
                <p>10-001 Olsztyn</p>
                <p className="mt-4">Nr konta: XX XXXX XXXX XXXX XXXX XXXX XXXX</p>
                <p className="text-sm text-gray-500 mt-2">W tytule przelewu prosimy wpisać numer zamówienia.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
