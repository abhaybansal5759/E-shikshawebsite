import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '@nextui-org/react';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/undraw_source_code_re_wd9m.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';

const Course = () => {
  const firstsem = [
    {
      id: 1,
      title: 'Engineering Maths',
      description: 'Engineering Mathematics encompasses mathematical principles and techniques applied to solve engineering problems. Topics include calculus, linear algebra, differential equations, complex analysis, probability, and statistics. It provides a theoretical framework for analyzing and modeling physical phenomena in engineering disciplines such as mechanical, electrical, civil, and chemical engineering.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Universal Human Values',
      description: 'Universal human values are principles and beliefs that are considered fundamental and inherent to all human beings, transcending cultural, religious, and societal differences. These values are often seen as guiding principles for ethical behavior and interpersonal relationships.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    {
        id: 3,
        title: 'Program for Problem Solving',
        description: ' A problem-solving program involves understanding the problem, analyzing its factors, brainstorming solutions, evaluating options, selecting the best solution, planning implementation, monitoring progress, making adjustments, gathering feedback, and documenting the process. It emphasizes collaboration, creativity, critical thinking, and systematic approaches to address challenges effectively in diverse domains.',
        progress: 25, // Example: Course completion progress (percentage)
      },
      {
        id: 4,
        title: 'Basic Civil Engineering',
        description: 'Basic Civil Engineering covers foundational concepts in civil engineering, including structural analysis, surveying, construction materials, fluid mechanics, geotechnical engineering, and transportation engineering. It provides fundamental knowledge for understanding and designing infrastructure projects such as buildings, bridges, roads, and water supply systems.',
        progress: 100, // Example: Course completion progress (percentage)
      },
    
  ];
  const Secondsem = [
    {
      id: 1,
      title: 'Engineering Mathematics – 2',
      description: 'Engineering Mathematics encompasses mathematical principles and techniques applied to solve engineering problems. Topics include calculus, linear algebra, differential equations, complex analysis, probability, and statistics. It provides a theoretical framework for analyzing and modeling physical phenomena in engineering disciplines such as mechanical, electrical, civil, and chemical engineering.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Basic Mechanical Engineering',
      description: 'Basic Mechanical Engineering covers fundamental concepts like mechanics, thermodynamics, fluid mechanics, materials science, manufacturing processes, machine design, and engineering drawing. It provides a foundation for understanding mechanical systems and processes, essential for further studies and specialization in mechanical engineering and related fields.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const thirdsem = [
    {
      id: 1,
      title: 'Software Engineering',
      description: 'Software engineering is a discipline that deals with the design, development, testing, and maintenance of software systems. It involves applying engineering principles and practices to the software development process to ensure the reliability, efficiency, and maintainability of software products.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Managerial Economics and Financial Accounting',
      description: 'Managerial Economics is a branch of economics that applies economic theory and quantitative methods to analyze business decisions. It focuses on how firms make decisions regarding production, pricing, investment, and resource allocation in order to maximize profits or achieve other objectives. Managerial Economics incorporates concepts from microeconomics, such as demand and supply analysis, cost analysis, and market structure, to help managers make informed decisions in various areas of business management.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const fourthsem = [
    {
      id: 1,
      title: 'Theory of Computation',
      description: 'The Theory of Computation is a field in computer science that deals with the study of algorithms, computational problems, and the capabilities and limitations of computing devices. It explores fundamental questions such as what problems can be solved computationally, how efficiently they can be solved, and what are the inherent constraints on computation.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Technical Communication',
      description: 'Technical communication is the process of conveying complex information, instructions, or concepts to an audience in a clear, concise, and understandable manner. It involves the creation and dissemination of technical documents, such as user manuals, specifications, reports, and instructional materials, aimed at helping users, customers, or stakeholders understand and use technical products or services effectively.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const fivethsem = [
    {
      id: 1,
      title: 'STPM',
      description: 'Learn to build websites and web applications testing. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks like Node.js and Django, this course covers the full stack of web development.',
      image: WebDevImage,
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Operating System',
      description: 'An operating system (OS) is software that manages computer hardware and provides services for applications. It serves as an intermediary between users and the computer hardware, facilitating the execution of programs and providing a user interface. The OS performs essential functions such as managing memory, handling input and output operations, scheduling tasks, and controlling peripheral devices. Examples of popular operating systems include Microsoft Windows, macOS, Linux, and Unix. Each OS has its unique features, user interface, and compatibility with software and hardware components.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const sixethsem = [
    {
      id: 1,
      title: 'Information Security System',
      description: 'An Information Security System (ISS) is a framework of policies, procedures, and technologies designed to protect an organizations sensitive information assets from unauthorized access, disclosure, alteration, or destruction. ISS aims to ensure the confidentiality, integrity, and availability of information resources, safeguarding them against various threats, such as cyberattacks, data breaches, and insider threats. Key components of an ISS include access controls, encryption, network security measures, monitoring and detection systems, incident response protocols, and employee training. Implementing an effective ISS is crucial for maintaining the trust of customers, stakeholders, and regulatory bodies, as well as preserving the reputation and continuity of the organization.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'E-Commerce',
      description: 'E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. It encompasses a wide range of transactions, including online retail, digital marketplaces, online auctions, and business-to-business sales. E-commerce platforms provide a virtual storefront for businesses to showcase their products or services, enabling customers to browse, purchase, and pay online. E-commerce has transformed the way businesses operate and consumers shop, offering convenience, accessibility, and a global reach. It also involves various aspects such as payment gateways, logistics, customer support, and cybersecurity to ensure a seamless and secure online shopping experience.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const seventhsem = [
    {
      id: 1,
      title: 'Environmental Impact Assesment',
      description: 'Environmental Impact Assessment (EIA) is a process used to identify and evaluate the potential environmental effects of a proposed project, plan, or policy before it is implemented. It involves assessing the likely environmental impacts, both positive and negative, and considering alternatives to minimize or mitigate these impacts. EIA aims to ensure that development projects are undertaken in a sustainable manner, taking into account factors such as air and water quality, biodiversity, land use, and socio-economic considerations. It often involves public participation and consultation to gather input from stakeholders and affected communities.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'BDA',
      description: 'BDA can stand for various things depending on the context. One common meaning is "Big Data Analytics," which refers to the process of examining large and varied datasets to uncover hidden patterns, correlations, and other insights. BDA involves using advanced algorithms and tools to analyze data from various sources, such as social media, sensors, and transaction records, to make informed decisions and predictions. Its widely used in business, healthcare, finance, and other industries to gain competitive advantages and improve operational efficiency.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];
  const eightsem = [
    {
      id: 1,
      title: 'Disaster Management',
      description: 'Disaster management involves preparing for, responding to, and recovering from natural or man-made disasters. It encompasses risk assessment, mitigation strategies, emergency response plans, and long-term recovery efforts. Effective disaster management involves coordination between government agencies, emergency services, non-governmental organizations, and communities to minimize loss of life and property damage. It also includes educating the public about disaster preparedness and resilience-building measures.',
      progress: 50, // Example: Course completion progress (percentage)
    },
    {
      id: 2,
      title: 'Internet Of Things',
      description: 'IoT, or Internet of Things, refers to the network of interconnected devices embedded with sensors, software, and connectivity features, enabling them to collect and exchange data. IoT facilitates communication between physical objects and the internet, allowing for remote monitoring, control, and automation of various systems and processes. It has applications across industries, including smart homes, healthcare, transportation, and manufacturing, revolutionizing how we interact with technology and the world around us.',
      progress: 75, // Example: Course completion progress (percentage)
    },
    
  ];

  return (
    <div>
        <h1 className='mainheading'>CS/IT</h1>
    <div className="course-section">

    <p className='Aptitude'>1st Semester</p>
        <hr/>
      <div className="course-container">
        {firstsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>2nd Semester</p>
        <hr/>
      <div className="course-container">
        {Secondsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>3rd Semester</p>
        <hr/>
      <div className="course-container">
        {thirdsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>4th Semester</p>
        <hr/>
      <div className="course-container">
        {fourthsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>5th Semester</p>
        <hr/>
      <div className="course-container">
        {fivethsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>6th Semester</p>
        <hr/>
      <div className="course-container">
        {sixethsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>7th Semester</p>
        <hr/>
      <div className="course-container">
        {seventhsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
      <div className="course-section">
    <p className='Aptitude'>8th Semester</p>
        <hr/>
      <div className="course-container">
        {eightsem.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Let's Learn
              </Link>
              <Progress
                aria-label={`${course.title} Completion`}
                size="sm"
                value={course.progress}
                color="success"
                showValueLabel={true}
                className="progress-bar"
              />
            </div>
          
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Course;
