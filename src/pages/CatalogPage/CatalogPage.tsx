import { Card, Catalog } from "components"
import { useGetCatalogQuery } from "redux/API/getItems"

export const CatalogPage = () => {
    console.log('render')

    return (
        <Catalog isFormDisabled={false} />
    )
}
