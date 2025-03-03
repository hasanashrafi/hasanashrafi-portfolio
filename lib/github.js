// github.js

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function getRepositories() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=lastUpdated&per_page=100&tab=repositories&type=public`,
      {
        
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }

    const repos = await response.json();

    // Filter out forks and sort by stars
    return repos
      .filter((repo) => !repo.fork && repo.homepage)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return []; // Return an empty array if the API call fails
  }
}