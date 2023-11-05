import { FilterContainer, FilterInput, FilterLabel } from "./styleSheet";

export function FilterComponent({ filter, setFilter }) {


    return (
        < FilterContainer >
            <div>
                <FilterLabel>Name:</FilterLabel>
                <FilterInput
                    type="text"
                    value={filter.name}
                    onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                />
            </div>
            <div>
                <FilterLabel>City:</FilterLabel>
                <FilterInput
                    type="text"
                    value={filter.city}
                    onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                />
            </div>
            <div>
                <FilterLabel>Cluster:</FilterLabel>
                <FilterInput
                    type="text"
                    value={filter.cluster}
                    onChange={(e) => setFilter({ ...filter, cluster: e.target.value })}
                />
            </div>
            <div>
                <FilterLabel>Available Space (Min):</FilterLabel>
                <FilterInput
                    type="number"
                    min={0}
                    value={filter.space_available}
                    onChange={(e) =>
                        setFilter({ ...filter, space_available: e.target.value })
                    }
                />
            </div>
        </FilterContainer >
    )
}