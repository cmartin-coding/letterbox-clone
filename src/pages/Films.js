import PageTemplate from "../Components/UI-Pages/PageTemplate";

export default function Films({ genres }) {
  return (
    <PageTemplate>
      <form>
        <label htmlFor="browse" className="text-white pr-3">
          Browse By
        </label>
        <select defaultValue="year">
          <option value="year" hidden>
            Year
          </option>
          <option>Upcoming</option>
          <option>2020's</option>
          <option>2010's</option>
          <option>2000's</option>
          <option>1990's</option>
        </select>
        <select defaultValue="rating">
          <option value="rating" hidden>
            Rating
          </option>
          <option>Highest First</option>
          <option>Lowest First</option>
        </select>
        <select defaultValue="popular">
          <option value="popular" hidden>
            Popular
          </option>
          <option>All Time</option>
          <option>This Year</option>
          <option>Just Released</option>
        </select>
        <select defaultValue="genre">
          <option value="genre" hidden>
            Genre
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </form>
      <h1>Popular Films This Week</h1>
    </PageTemplate>
  );
}
