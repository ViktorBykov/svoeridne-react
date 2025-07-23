function createSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // для транслітерації діакритиків
    .replace(/[\u0300-\u036f]/g, "") // видалити діакритики
    .replace(/[^a-z0-9\s-]/g, "") // видалити спецсимволи
    .trim()
    .replace(/\s+/g, "-") // замінити пробіли на дефіси
    .replace(/--+/g, "-"); // видалити подвійні дефіси
}
export default createSlug;
