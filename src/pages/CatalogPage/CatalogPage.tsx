import { Card, Catalog } from "components"
import { useGetCatalogQuery } from "redux/API/getItems"

export const CatalogPage = () => {

    const { data: items, isLoading } = useGetCatalogQuery()

    return (
        <Catalog isFormDisabled={false} items={items!} isLoading={isLoading} />
    )
}
