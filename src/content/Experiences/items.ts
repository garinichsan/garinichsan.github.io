
type JobExperience = {
    id: string;
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
  };

export const Experiences: JobExperience[] = [
    {
      id: '5',
      companyName: 'PT GITS Indonesia',
      companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQF_HxqXQ4mjVA/company-logo_100_100/company-logo_100_100/0/1691549900556/gits_indonesia_logo?e=1739404800&v=beta&t=fqUppG-PWWpPWx__75cwwUu2PdNkS9-5cvVvhbTeTpg',
      jobTitle: 'Senior DevOps Engineer',
      location: 'Bandung, Indonesia',
      startDate: 'Jun 2024',
      endDate: 'Oct 2024',
      description: [
        'Specializing in designing and implementing deployment architecture, CI/CD pipelines, and monitoring systems, managing credentials, supporting infrastructure, collaborating with the cloud division, and facilitating knowledge sharing among engineers.',
        'Skills: Information Technology Infrastructure · Google Cloud Platform (GCP) · Amazon Web Service (AWS) · Continuous Integration and Continuous Delivery (CI/CD) · Terraform · Shell Scripting'
      ]
    },
    {
      id: '4',
      companyName: 'Gak Gendut Lagi (GGL)',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C560BAQEoQQYiNuNVsA/company-logo_200_200/company-logo_200_200/0/1630639262281/gakgendutlagi_logo?e=1739404800&v=beta&t=sND2GZoCROBsXn4tPfJgai4TrGQFpUENre5lQe9qFRU',
      jobTitle: 'Medior DevOps Engineer',
      location: 'Remote',
      startDate: 'Nov 2022',
      endDate: 'Jun 2024',
      description: [
        'Served as the inaugural DevOps team member, collaborating closely with the Director of Engineering to strategize, architect, and execute the IT infrastructure and development workflow. Actively engaged in ongoing research and learning initiatives aimed at enhancing the development workflow, optimizing IT infrastructure, and bolstering security measures to elevate developer productivity and enhance application performance.',
        'Skills: Information Technology Infrastructure · Google Cloud Platform (GCP) · Continuous Integration and Continuous Delivery (CI/CD) · Agile Methodologies · Bash · Reliability Engineering · DevOps · Terraform · Site Reliability Engineering · Shell Scripting · PostgreSQL · MySQL'
      ]
    },
    {
      id: '3',
      companyName: 'Xendit',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEFJPFvzTYq5A/company-logo_200_200/company-logo_200_200/0/1630456612741/xendit_logo?e=1739404800&v=beta&t=bbWZQLm8_J73sEeNXGbwKQHeOnNrtPqR0QkbaLfzsg8',
      jobTitle: 'Infrastructure Engineer',
      location: 'Remote',
      startDate: 'Sep 2022',
      endDate: 'Oct 2022',
      description: [
        'Contracted for a 3-month performance review as an Intern. Onboarded in the culture of the company and its tech stack. Unfortunately impacted by company rightsizing and has to be laid off before the end of our contract.'
      ]
    },
    {
      id: '2',
      companyName: 'Telkom Indonesia',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGVLh28SyAv-g/company-logo_200_200/company-logo_200_200/0/1631315215307?e=1739404800&v=beta&t=HzTsHIRpOHi16ZDebgDVt4ExnO2aPrY1QIe8wxNF1a0',
      jobTitle: 'Research and Development Assistant',
      location: 'Bandung, Indonesia',
      startDate: 'Apr 2021',
      endDate: 'Apr 2022',
      description: [
        'I have successfully led and contributed to various software development and DevOps projects, showcasing my expertise in backend development and system automation. My leadership skills were evident as I served as the sprint master for both front and back-office development for an entire month when my supervisor took a long leave.',
        'Skills: Ansible · Elastic Stack (ELK) · AWX Project · Node.js · Docker · XOA · XCP-ng · Kubernetes · Websocket · Janus'
      ]
    },
    {
      id: '1',
      companyName: 'Direktorat Jenderal Pendidikan Tinggi, Riset dan Teknologi Kemdikbudristek',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C510BAQGHhZ0tqET3IA/company-logo_200_200/company-logo_200_200/0/1631308035829?e=1739404800&v=beta&t=Eicu1_Dg60pn_btUVJfk1eGcF8Pw0P_0Br0rSIIqRZY',
      jobTitle: 'System Engineer',
      location: 'Bandung, Indonesia',
      startDate: 'Dec 2021',
      endDate: 'Mar 2022',
      description: [
        'Develop and maintain part of the IT infrastructure of Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN ) 2022 under Lembaga Tes Masuk Perguruan Tinggi (LTMPT) of the Ministry of Education, Culture, Research, and Technology using Google Cloud Platform (GCP).',
        'The system is used by 847,069 students, 19,204 senior high schools, and 126 Public Universities in Indonesia.',
        'Skills: Google Cloud Platform (GCP) · Google Analytics · DevOps · Google Kubernetes Engine (GKE) · Kubernetes'
      ]
    },
    // {
    //   id: '0',
    //   companyName: 'DataDriven Solutions',
    //   companyLogo: '/placeholder.svg?height=48&width=48',
    //   jobTitle: 'Full Stack Developer',
    //   location: 'New York, NY',
    //   startDate: 'Mar 2017',
    //   endDate: 'Dec 2019',
    //   description: [
    //     'Developed and maintained multiple web applications using React and Node.js',
    //     'Collaborated with UX team to implement responsive designs',
    //     'Mentored junior developers and conducted code reviews'
    //   ]
    // }
  ];