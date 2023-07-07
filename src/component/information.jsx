const Information = ({nom, prenom, age, photo, adresse, tel}) => {
    return (
        <>
        <h3>En savoir plus sur moi </h3>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
            <img className='profil-image'
                src={photo}
                alt="Photo de profil"
            />
            </div>
            <div>
            {/* <h2>Informations personnelles</h2>
            <p>Nom : {nom + ' ' + prenom}</p>
            <p>Âge : {age} ans</p>
            <p>Adresse : {adresse}</p>
            <p>Tel : {tel}</p> */}
            <p>
                Salut ! Moi, c'est {prenom + ' ' + nom}, un développeur full stack de {age} ans, basé à l'adresse : {adresse}. Si tu cherches quelqu'un de passionné par la création de sites web et d'applications, tu es au bon endroit !
            </p>
            <p>
                J'ai toujours été fasciné par le monde de la technologie et comment elle peut impacter notre quotidien de manière positive. Depuis que j'ai découvert le développement, j'ai plongé tête la première dans cet univers passionnant et je n'ai jamais regardé en arrière.
            </p>
            {/* <p>
                En tant que développeur full stack, j'aime jongler entre le front-end et le back-end, et créer des expériences utilisateur exceptionnelles. J'ai une solide expérience avec les langages de programmation tels que HTML, CSS, JavaScript, ainsi que les frameworks populaires comme React et Node.js. Je suis également à l'aise avec les bases de données et les systèmes de gestion de contenu.
            </p>
            <p>
                Ce que j'apprécie le plus dans mon travail, c'est la possibilité de transformer des idées en réalité. J'adore collaborer avec des équipes créatives et voir un projet prendre vie, du concept initial à la version finale. Je suis toujours à l'affût des dernières tendances technologiques et je suis constamment en train d'apprendre de nouvelles compétences pour rester à jour dans ce domaine en constante évolution.
            </p>
            <p>
                Si tu es à la recherche d'un développeur fiable, motivé et prêt à relever de nouveaux défis, n'hésite pas à me contacter au {tel}. Je serais ravi de discuter de tes idées et de voir comment nous pouvons collaborer pour créer quelque chose de génial ensemble !
            </p>
            <p>
                À bientôt et restons connectés avec la technologie !
            </p> */}
            </div>
      </div>
      </>
    );
    }
export default Information;