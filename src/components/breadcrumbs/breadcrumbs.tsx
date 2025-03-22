type BreadcrumbItem = {
  label: string;
  href?: string;
  isActive?: boolean;
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {items.map((item,index) => (
            <li key={index} className="breadcrumbs__item">
              {item.isActive ? (
                <span className="breadcrumbs__link breadcrumbs__link--active">{item.label}</span>
              ) : (
                <a className="breadcrumbs__link" href={item.href}>
                  {item.label}
                  <svg width="5" height="8" aria-hidden="true">
                    <use href="#icon-arrow-mini"></use>
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
