const GITHUB_USERNAME = process.env.GITHUB_USERNAME

export async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50&tab=repositories&type=public`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }

  const repos = await response.json()
  
  // Filter out forks and sort by stars
  return repos
    .filter((repo) => !repo.fork && repo.homepage)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
}