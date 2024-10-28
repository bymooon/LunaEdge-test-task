import PlatformSelector from "../../PlatformSelector/PlatformSelector";

const ConnectShopifyDecline: React.FC<{ handleNext: () => void }> = ({
  handleNext,
}) => {
  return (
    <PlatformSelector
      handleNext={handleNext}
      welcome="Don`t use Shopify"
      paragraph="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform."
      options={[
        {
          label: "Shopify",
          value: "shopify",
        },
        {
          label: "BigCommerce",
          value: "BigCommerce",
        },
        {
          label: "Wix",
          value: "Wix",
        },
      ]}
      buttonText="Submit"
      question="Actually use Shopify?"
    />
  );
};

export default ConnectShopifyDecline;
