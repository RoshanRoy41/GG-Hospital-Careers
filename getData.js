async function getData(url) {
  try {
    console.log("===GETTING DATA===");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export { getData };
