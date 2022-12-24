import bannerLogo from '../../assets/img/banner.jpg'
export const Banner = () => {
    return (
        <>
            <div className="banner">
                <img src={bannerLogo} className="img-fluid" alt="К весне готовы!" />
                <h2 className="banner-header">К весне готовы!</h2>
            </div>
        </>
    )
}
