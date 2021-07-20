import ContentLoader from 'react-content-loader';

export default () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="340" rx="12" ry="12" width="280" height="72" />
        <rect x="0" y="300" rx="0" ry="0" width="280" height="27" />
        <rect x="3" y="425" rx="4" ry="4" width="98" height="30" />
        <rect x="170" y="420" rx="21" ry="21" width="110" height="40" />
    </ContentLoader>
);
