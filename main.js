function doTheThing() {
  const input = document.getElementById('image-input');
  const output_grayscale = document.getElementById('image-output-grayscale');
  const output_original = document.getElementById('image-output-original');

  if (input.files && input.files[0]) {
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    output_grayscale.src = url;
    output_original.src = url;
  }
}
