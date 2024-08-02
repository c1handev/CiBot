import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yardım Lazımmı? Doğru Bağlantıyı Dene!',
        'Yolun Sonu...',
        'Uzay Boşluğuna Düştün!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

