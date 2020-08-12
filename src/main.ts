import * as github from "@actions/github"
import * as core from "@actions/core"

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput("github_token", { required: true })
    const [owner, repo] = core.getInput("repo").split("/")
    const issue_number = core.getInput("number") === "" ? github.context.issue.number : parseInt(core.getInput("number"))
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
