function Shimmer({list}) {
    return (
        <>
            {
                list.map(() => {
                    <div className="shimmer-card">
                        <img src="" alt="" className="shimmer-logo" />
                        <span className="shimmer-text"></span>
                        <span className="shimmer-text"></span>
                        <span className="shimmer-text"></span>
                        <span className="shimmer-text"></span>
                    </div>
                })
            }
        </>
    );
}

export default Shimmer;