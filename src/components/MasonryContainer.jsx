const MasonryContainer = ({children}) => {
    return <>
        <div className="masonry-container max-h-[200px] mt-12">
            {children}
        </div>
    </>
}

export default MasonryContainer;