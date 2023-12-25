import Navigation from "../../layout/Navigation";
const Groups = () => {
    const TitleGroups =  'Groups | Facebook';
    document.title=`${TitleGroups}`;
    return (
        <>
         <div className="container">
         <Navigation></Navigation>
         <h1>Groups</h1>
         </div>   
        </>
    );
};

export default Groups;