const Loading = () =>
{
    return(
        <div className="main-content">
            <div className="section">
        <div className="loading" style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',height:'90vh'}} >
            <div className="loader m-4" style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',height:'90vh'}}>
            <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
           </div>
           Loading...
            </div>
            </div> 
            </div>
        </div>
    )
}

export default Loading;

