import { CallToActionButton } from "components/CallToActionButton/CallToActionButton";
import { Column } from "components/Column/Column";
import { Columns } from "components/Columns/Columns";
import { Cover } from "components/Cover/Cover";
import { Heading } from "components/Heading/Heading";
import { Paragraph } from "components/Paragraph/Paragraph";
import { theme } from "theme";
import Image from "next/image";
import { PropertySearch } from "components/PropertySearch/PropertySearch";
import { FormspreeForm } from "components/FormspreeForm/FormspreeForm";
import { PropertyFeatures } from "components/PropertyFeatures/PropertyFeatures";
import { Gallery } from "components/Gallery/Gallery";
import { TickItem } from "components/TickItem/TickItem";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }
      case "core/gallery": {
        console.log("gallery block: ", block);
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/post-title":
      case "core/heading": {
        console.log("heading: ", block.attributes);
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.align}
            level={block.attributes.level}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        console.log("columns: ", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        console.log("block: ", block);
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            alt={block.attributes.alt || ""}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
          />
        );
      }
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }

      default: {
        console.log("UNKNOWN: ", block);

        return null;
      }
    }
  });
};
