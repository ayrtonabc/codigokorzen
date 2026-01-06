import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-korzen-charcoal mb-8 border-b border-korzen-olive/20 pb-4">
            Polityka Prywatności
          </h1>
          
          <div className="prose prose-stone max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">I. Administrator Danych</h2>
              <p className="mb-4">
                Administratorem Państwa danych osobowych jest KORZEŃ Pracownia Rzemieślnicza z siedzibą w województwie Warmińsko-Mazurskim.
                Kontakt z administratorem możliwy jest pod adresem e-mail: <strong>kontakt@pracowniakorzen.pl</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">II. Cele i podstawy przetwarzania</h2>
              <p className="mb-4">Państwa dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>zawarcia i wykonania umowy sprzedaży (realizacji zamówienia),</li>
                <li>realizacji obowiązków prawnych ciążących na Administratorze (np. wystawienie faktury),</li>
                <li>obsługi reklamacji i zwrotów,</li>
                <li>kontaktu z Państwem w sprawach związanych z realizacją zamówienia.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">III. Odbiorcy danych</h2>
              <p className="mb-4">
                W celu realizacji umowy możemy udostępniać Państwa dane podmiotom współpracującym, takim jak:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>firmy kurierskie i pocztowe (w celu dostarczenia przesyłki),</li>
                <li>operatorzy płatności (w celu obsługi płatności),</li>
                <li>biuro księgowe (w celu realizacji obowiązków podatkowych).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">IV. Pliki Cookies</h2>
              <p className="mb-4">
                Nasz sklep internetowy wykorzystuje pliki cookies (ciasteczka). Są to niewielkie informacje tekstowe, wysyłane przez serwer WWW i zapisywane po stronie użytkownika.
              </p>
              <p className="mb-4">
                Cookies wykorzystywane są w celu:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>utrzymania sesji Klienta (po zalogowaniu), dzięki której Klient nie musi na każdej podstronie Sklepu ponownie wpisywać loginu i hasła,</li>
                <li>zapamiętania zawartości koszyka,</li>
                <li>tworzenia anonimowych statystyk, które pomagają zrozumieć, w jaki sposób Klienci korzystają ze stron internetowych Sklepu.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-korzen-charcoal mb-4">V. Prawa osoby, której dane dotyczą</h2>
              <p className="mb-4">
                Posiadają Państwo prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
