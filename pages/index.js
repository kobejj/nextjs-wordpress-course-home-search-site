import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu/MainMenu";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

// import axios from "axios";

// export default function Home(props) {
//   console.log(props);
//   return <div>Next JS &amp; WordPress course.</div>;
// }

// export const getStaticProps = async () => {
//   const query = `
//     query {
//       pages {
//         nodes {
//           title
//         }
//       }
//     }
//   `;

//   try {
//     const result = await axios({
//       url: `http://localhost:10004/graphql`,
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       data: {
//         query,
//       },
//     });

//     const { data } = result.data;

//     return {
//       props: {
//         data,
//         myexapleprop: "test",
//       },
//     };
//   } catch (error) {
//     console.error("Error during GraphQL query:", error);

//     return {
//       props: {},
//     };
//   }
// };
