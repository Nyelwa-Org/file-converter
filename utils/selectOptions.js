export default function selectOptions(formats) {
  const new_formats = Array.prototype.slice.call(formats);
  return new_formats.map((format) => {
    return (
      <option key={format.input_format} value={format.input_format}>
        {format.input_format}
      </option>
    );
  });
}
