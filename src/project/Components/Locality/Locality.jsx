import "./Locality.css";
export function Locality(){
    return(
        <>
        
        
            <div className="container w-100 parent">
                <div className="row">
                <h1 className="text-start pb-5 locality-title">Popular localities in and around <span>Chennai</span></h1>

                    {[
                        { name: "T-Nagar", places: 379 },
                        { name: "Noongambakkam", places: 327 },
                        { name: "Velachery", places: 528 },
                        { name: "Adyar", places: 379 },
                        { name: "Anna Nagar", places: 327 },
                        { name: "Thuraipakkam", places: 528 },
                        { name: "Mylapore", places: 181 },
                        { name: "Alwarpet", places: 150 },
                    ].map((locality, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="txt-box text-center">
                                <span><b>{locality.name}</b><br />{locality.places} Places</span>
                                <div className="btn-group dropend">
                                    <button
                                        type="button"
                                        className="btn dropdown-toggle slide arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 col-md-4 mb-3">
                        <div className="txt-box text-center">
                            <div className="dropdown text-center pt-1">
                                See more
                                <button
                                    className="btn btn-light dropdown-toggle text-black p-0 mb-2"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
