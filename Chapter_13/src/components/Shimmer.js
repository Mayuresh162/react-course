function Shimmer({list}) {
    return (
        <div className="flex flex-wrap" data-testid="shimmer">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div className="border-2 border-gray-500 h-80 w-64 p-2" key={index}>
                        <img src="" alt="" className="w-full h-full bg-gray-600" />
                    </div>
                ))
            }
        </div>
    );
}

export default Shimmer;