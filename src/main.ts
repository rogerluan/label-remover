import * as github from "@actions/github"
import * as core from "@actions/core"

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput("github_token", { required: true })
    const [owner, repo] = core.getInput("repo").split("/")
    const issue_number = github.context.issue.number
    const octokit = github.getOctokit(githubToken)
    await octokit.issues.removeAllLabels({
      owner,
      repo,
      issue_number,
    })
  } catch (e) {
    core.error(e)
    core.setFailed(e.message)
  }
}

run()
