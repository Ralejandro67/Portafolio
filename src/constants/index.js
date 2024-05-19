import { amazon, sykes, cmacgm } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    azure,
    bootstrap,
    nodejs,
    pricewise,
    react,
    csharp,
    docker,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    threejs,
    dotnet,
    java,
    laravel,
    mysql,
    oracle,
    python,
    php,
    sqlserver,
    education,
    note,
    nextjs,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "ThreeJs",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "Typescript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: dotnet,
        name: ".Net",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: oracle,
        name: "Oracle",
        type: "Database",
    },
    {
        imageUrl: sqlserver,
        name: "SQL Server",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Web Services",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "Representante de Atención al Cliente",
        company_name: "Sykes",
        icon: sykes,
        iconBg: "#DAF1F9",
        date: "Octubre 2019 - Enero 2020",
        points: [
            "Proveía excepcional servicio al cliente a clientes que tenían problemas con sus existentes cuentas bancarias, accesos, creación de nuevas cuentas, problemas con sus tarjetas y preguntas en general."
        ],
    },
    {
        title: "Representante en Exportaciones",
        company_name: "CMA CGM Group",
        icon: cmacgm,
        iconBg: "#B0DEFF",
        date: "Marzo 2020 - Mayo 2021",
        points: [
            "Supervise las solicitudes de reserva de clientes en EE. UU. que desean exportar sus productos a otros países. Garantizaba el cumplimiento de las restricciones a las que pueda estar sujeta cualquier solicitud. Proporcionar confirmaciones de reserva o dar seguimiento a dichas solicitudes a sus respectivos propietarios."
        ],
    },
    {
        title: "Asociado en ML AVOC ",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#FFE5B9",
        date: "Julio 2021 - Enero 2023",
        points: [
            "Supervise el proceso de almacenamiento de productos en los centros logísticos de Amazon alrededor del mundo, con el fin de proporcionar un análisis cognitivo de las actividades realizadas y actuar o escalar sistemáticamente en consecuencia con precisión y rapidez con el fin de enseñarle a una IA a realizar todas las mismas actividades."
        ],
    },
    {
        title: "Investigation Specialist",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#FFE5B9",
        date: "Enero 2023 - Enero 2024",
        points: [
            "Responable de investigar y analizar transacciones de alto riesgo.", 
            "Investigaba actividad sospechosa categorizada como posibles fraudes y comportamientos que podrian representar un riesgo, así como también de prevenir futuros problemas de fraude."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    }
];

export const university = [
    {
        iconUrl: education,
        theme: 'btn-back-red',
        name: 'Diploma de Bachillerato',
        description: 'Escuela Panamericana, El Salvador. Diplomas de Secundaria, graduado como estudiante de los Estados Unidos y como estudiante en El Salvador. ',
        time: 'Octubre 2015 - Junio 2028'
    },
    {
        iconUrl: education,
        theme: 'btn-back-green',
        name: 'Licenciatura en Ingeniería en Software',
        description: 'Universidad Internacional de las Americas, Costa Rica.',
        time: 'Enero 2019 - Abril 2024'
    },
    {
        iconUrl: note,
        theme: 'btn-back-blue',
        name: 'Certificación como Desarrollador Junior',
        description: 'Certificación enfocada en Back-end, Oracle ONE.',
        time: 'Diciembre 2022 - Mayo 2023'
    },
    {
        iconUrl: note,
        theme: 'btn-back-pink',
        name: 'Certificación en Advanced Python',
        description: 'Udemy.',
        time: 'Septiembre 2022 - Noviembre 2022'
    },
    {
        iconUrl: note,
        theme: 'btn-back-black',
        name: 'Certificación en Advanced C#',
        description: 'Udemy.',
        time: 'Noviembre 2022 - Enero 2023'
    },
    {
        iconUrl: note,
        theme: 'btn-back-yellow',
        name: 'Certificación en SCRUM',
        description: 'SCRUM study.',
        time: 'Diciembre 2022 - Diciembre 2022'
    }
];