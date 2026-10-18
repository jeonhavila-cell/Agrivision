const API_BASE =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8080/api";

export async function createDiagnosis(payload) {

  const response = await fetch(
    `${API_BASE}/diagnoses`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {

    const message =
      await response.text();

    throw new Error(
      message ||
      "Unable to create diagnosis"
    );
  }

  return response.json();
}


export async function getDiagnoses() {

  const response =
    await fetch(
      `${API_BASE}/diagnoses`
    );

  if (!response.ok) {

    throw new Error(
      "Unable to load diagnosis history"
    );
  }

  return response.json();
}


export async function checkHealth() {

  const response =
    await fetch(
      `${API_BASE}/health`
    );

  return response.ok;
}