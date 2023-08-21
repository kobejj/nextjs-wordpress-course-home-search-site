import { gql } from "@apollo/client";
import { client } from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (filters.hasParking) {
      hasParkingFilter = `{
        compare: EQUAL_TO,
        key: "has_parking",
        value: "1",
      },`;
    }
    if (filters.petFriendly) {
      petFriendlyFilter = `{
        compare: EQUAL_TO,
        key: "pet_friendly",
        value: "1",
      },`;
    }
    if (filters.minPrice) {
      minPriceFilter = `{ compare: GREATER_THAN_OR_EQUAL_TO, key: "price", value: "${filters.minPrice}", type: NUMERIC }`;
    }
    if (filters.maxPrice) {
      maxPriceFilter = `{ compare: LESS_THAN_OR_EQUAL_TO, key: "price", value: "${filters.maxPrice}", type: NUMERIC }`;
    }

    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { offsetPagination: { size: 3, offset: ${
            ((filters.page || 1) - 1) * 3
          } }
          
          metaQuery: {relation: AND, metaArray: [
            ${petFriendlyFilter}
            ${hasParkingFilter}
            ${minPriceFilter}
            ${maxPriceFilter}
          ]},
          
           }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              uri
              title
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                hasParking
                petFriendly
                price
                bedrooms
                bathrooms
              }
              databaseId
            }
          }
        }
      `,
    });
    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

export default handler;
