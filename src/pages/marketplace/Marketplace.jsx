import Navigation from "../../layout/Navigation";
const Marketplace = () => {
    const TitleMarketplace =  'Marketplace | Facebook';
    document.title=`${TitleMarketplace}`
    return (
        <>
         <div className="container">
         <Navigation></Navigation>
          <h1>Market place</h1>
         </div>   
        </>
    );
};

export default Marketplace;