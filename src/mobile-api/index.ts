export const fetchMobileApi = async <T>(
  url: string
): Promise<{ data?: T; error?: string }> => {
  try {
    if (!process.env.MOBILE_API_KEY) {
      throw new Error("Error fetching products. Missing auth.");
    }
    const fullUrl = `${process.env.MOBILE_API_URL}${url}`;
    const res = await fetch(fullUrl, {
      headers: {
        "x-api-key": process.env.MOBILE_API_KEY,
      },
      // Revalidate at most every hour
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const responseData = await res.json();
    return { data: responseData };
  } catch (e) {
    const errorMsg = e instanceof Error ? e.message : String(e);
    console.log(e);
    return { error: errorMsg };
  }
};
