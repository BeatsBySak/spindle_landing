import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is Spindle, and how does it transform my database into an API?",
    ans: "Spindle allows users to quickly transform their MongoDB databases into fully-functional, user-facing APIs. By simply inputting your API name, MongoDB URI, and database schema into Spindle, and describing in natural language what you want your API to do, Spindle utilizes a backend model powered by GPT-4 to intelligently create custom endpoints and comprehensive documentation tailored to your dataset and desired functionalities. This process eliminates the need for costly and time-consuming API development from scratch.",
  },
  {
    id: 2,
    quest: "How does Spindle ensure the scalability and manageability of the APIs it generates?",
    ans: "Spindle ensures scalability and manageability by hosting the generated APIs on optimized database designs and using virtual machines to manage data efficiently. This approach allows Spindle to handle large amounts of data seamlessly, making it an ideal solution for companies wishing to provide extensive data access to their users without allocating additional resources. The backend technology also supports dynamic scaling to accommodate growing data needs, ensuring your API remains fast and reliable as your database grows.",
  },
  {
    id: 3,
    quest: "Which platform does Spindle use to host APIs and what does the future entail?",
    ans: "Spindle is currently focused on hosting APIs for MongoDB, a NoSQL database, with plans to expand its services to include APIs for SQL databases. This expansion will allow a broader range of businesses and developers who use SQL databases to benefit from Spindle's easy-to-use, scalable API generation capabilities. By supporting both NoSQL and SQL databases, Spindle aims to become a more versatile tool that can cater to various data management needs, enhancing accessibility and interaction with diverse datasets across different sectors, such as healthcare and finance.",
  },
];

export default faqData;
