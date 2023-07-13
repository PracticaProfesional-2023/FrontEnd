import createInstance from "./index";

const utilsInstance = createInstance();

export const getDeparments = async () => {
    const { data } = await utilsInstance.get("/utils/departments");

    const formatedData = data.departments.map((department) => {
        return [...department.municipalities.map(m => ({
            label: m.name,
            value: m.id
        }))]
    })

    return [...formatedData.flat()];
}