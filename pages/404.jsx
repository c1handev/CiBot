import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yardım Lazımmı? Doğru Bağlantıyı Dene!',
        'Yolun Sonu...',
        'Uzay Boşluğuna Düştün!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa Bulunamadı."} />
}

export default UnkownPage;

