import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Returns = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-korzen-charcoal mb-8 border-b border-korzen-olive/20 pb-4">
            Zwroty i Reklamacje
          </h1>
          
          <div className="prose prose-stone max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Prawo do odstąpienia od umowy</h2>
              <p className="mb-4">
                Jako konsument masz prawo odstąpić od umowy zawartej w naszym sklepie internetowym w terminie 14 dni bez podania jakiejkolwiek przyczyny. 
                Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia, w którym weszli Państwo w posiadanie rzeczy.
              </p>
              <p className="mb-4">
                Aby skorzystać z prawa odstąpienia od umowy, muszą Państwo poinformować nas o swojej decyzji w drodze jednoznacznego oświadczenia 
                (na przykład pismo wysłane pocztą lub pocztą elektroniczną).
              </p>
            </section>

            <section className="mb-8 bg-amber-50 p-6 rounded-md border border-amber-200">
              <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚠️</span> Ważny wyjątek: Produkty Personalizowane
              </h2>
              <p className="text-amber-900 font-medium mb-2">
                Zgodnie z art. 38 ustawy o prawach konsumenta, prawo odstąpienia od umowy zawartej na odległość <strong>nie przysługuje</strong> konsumentowi w odniesieniu do umów:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-amber-900">
                <li>
                  W której przedmiotem świadczenia jest <strong>rzecz nieprefabrykowana, wyprodukowana według specyfikacji konsumenta</strong> lub służąca zaspokojeniu jego zindywidualizowanych potrzeb.
                </li>
              </ul>
              <p className="mt-4 text-amber-900 text-sm">
                Oznacza to, że produkty wykonane na specjalne zamówienie, posiadające grawer, niestandardowe wymiary lub inne cechy indywidualne wskazane przez Klienta, <strong>nie podlegają zwrotowi</strong>. 
                Prosimy o przemyślane zakupy produktów personalizowanych, ponieważ są one tworzone specjalnie dla Ciebie i nie mamy możliwości ich dalszej odsprzedaży.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Procedura Zwrotu (dla produktów standardowych)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Zapakuj bezpiecznie zwracany produkt.</li>
                <li>Dołącz do przesyłki dowód zakupu oraz formularz zwrotu (może być odręczny).</li>
                <li>Odeślij produkt na nasz adres (podany w zakładce Kontakt) na własny koszt.</li>
                <li>Zwrot płatności nastąpi niezwłocznie, nie później niż w terminie 14 dni od otrzymania przez nas zwracanej rzeczy.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">Reklamacje</h2>
              <p className="mb-4">
                Jesteśmy dumni z jakości naszych produktów, ale jeśli otrzymany towar posiada wady, masz prawo do złożenia reklamacji.
                Reklamacje z tytułu rękojmi można składać drogą mailową na adres: <strong>kontakt@pracowniakorzen.pl</strong>.
              </p>
              <p>
                W zgłoszeniu prosimy o podanie: imienia i nazwiska, numeru zamówienia, opisu wady oraz zdjęć uszkodzenia. 
                Rozpatrzymy reklamację w terminie 14 dni.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
