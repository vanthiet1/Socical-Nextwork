import Navigation from "../../layout/Navigation";
const Gaming = () => {
    const TitleGaming =  'Gaming | Facebook';
    document.title=`${TitleGaming}`;
    return (
        <>
        <div className="container">
            <Navigation></Navigation>
            <h1>gaming</h1>
        </div>
        </>
    );
};

export default Gaming;