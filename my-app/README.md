May 24, 2022

```
Han-MBPro-10% git add .
Han-MBPro-10% git commit -m "recommit"
On branch feature/stephen/A2A-12
nothing to commit, working tree clean
Han-MBPro-10% git push
fatal: The current branch feature/stephen/A2A-12 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/stephen/A2A-12

Han-MBPro-10% git push --set-upstream origin feature/stephen/A2A-12
Enumerating objects: 119, done.
Counting objects: 100% (119/119), done.
Delta compression using up to 2 threads
Compressing objects: 100% (97/97), done.
Writing objects: 100% (119/119), 250.67 KiB | 2.75 MiB/s, done.
Total 119 (delta 31), reused 60 (delta 17), pack-reused 0
remote: Resolving deltas: 100% (31/31), done.
To https://github.com/JRAntra/FRE-Training-04252022.git
 ! [remote rejected] feature/stephen/A2A-12 -> feature/stephen/A2A-12 (cannot lock ref 'refs/heads/feature/stephen/A2A-12': 'refs/heads/feature/stephen' exists; cannot create 'refs/heads/feature/stephen/A2A-12')
error: failed to push some refs to 'https://github.com/JRAntra/FRE-Training-04252022.git'
Han-MBPro-10% git remote prune origin
Pruning origin
URL: https://github.com/JRAntra/FRE-Training-04252022.git
 * [pruned] origin/feature/kiki
 * [pruned] origin/feature/xueping_A2A-11_create_Navbar
 * [pruned] origin/styling
Han-MBPro-10% git add .
Han-MBPro-10% git commit -m "recommit"
On branch feature/stephen/A2A-12
nothing to commit, working tree clean
Han-MBPro-10% git push
fatal: The current branch feature/stephen/A2A-12 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/stephen/A2A-12

Han-MBPro-10% git push --set-upstream origin feature/stephen/A2A-12
Enumerating objects: 119, done.
Counting objects: 100% (119/119), done.
Delta compression using up to 2 threads
Compressing objects: 100% (97/97), done.
Writing objects: 100% (119/119), 250.67 KiB | 2.16 MiB/s, done.
Total 119 (delta 31), reused 60 (delta 17), pack-reused 0
remote: Resolving deltas: 100% (31/31), done.
To https://github.com/JRAntra/FRE-Training-04252022.git
 ! [remote rejected] feature/stephen/A2A-12 -> feature/stephen/A2A-12 (cannot lock ref 'refs/heads/feature/stephen/A2A-12': 'refs/heads/feature/stephen' exists; cannot create 'refs/heads/feature/stephen/A2A-12')
error: failed to push some refs to 'https://github.com/JRAntra/FRE-Training-04252022.git'
Han-MBPro-10% git pull --rebase
remote: Enumerating objects: 64, done.
remote: Counting objects: 100% (64/64), done.
remote: Compressing objects: 100% (26/26), done.
remote: Total 64 (delta 38), reused 63 (delta 37), pack-reused 0
Unpacking objects: 100% (64/64), 9.11 KiB | 35.00 KiB/s, done.
From https://github.com/JRAntra/FRE-Training-04252022
 * [new branch]      feature/YichaoAssginment1 -> origin/feature/YichaoAssginment1
 * [new branch]      feature/kiki/day7 -> origin/feature/kiki/day7
There is no tracking information for the current branch.
Please specify which branch you want to rebase against.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> feature/stephen/A2A-12

Han-MBPro-10% git pull Release_Branch/AngularSis feature/stephen/A2A-12
fatal: 'Release_Branch/AngularSis' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Han-MBPro-10% ls
README.md	antrashare	index.html
Han-MBPro-10% git branch
  Release_Branch/AngularSis
  by_stephen/notes
* feature/stephen/A2A-12
  feature/yichao/day7
  main
Han-MBPro-10% pwd
/Users/stephenhanjaya/Documents/antra/FRE-Training-04252022
Han-MBPro-10% ls
README.md	antrashare	index.html
Han-MBPro-10% git add .
Han-MBPro-10% git commit -m "recommit"
On branch feature/stephen/A2A-12
nothing to commit, working tree clean
Han-MBPro-10% git push
fatal: The current branch feature/stephen/A2A-12 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/stephen/A2A-12

Han-MBPro-10% git push --set-upstream origin feature/stephen/A2A-12
Enumerating objects: 119, done.
Counting objects: 100% (119/119), done.
Delta compression using up to 2 threads
Compressing objects: 100% (97/97), done.
Writing objects: 100% (119/119), 250.67 KiB | 1.80 MiB/s, done.
Total 119 (delta 31), reused 60 (delta 17), pack-reused 0
remote: Resolving deltas: 100% (31/31), done.
remote:
remote: Create a pull request for 'feature/stephen/A2A-12' on GitHub by visiting:
remote:      https://github.com/JRAntra/FRE-Training-04252022/pull/new/feature/stephen/A2A-12
remote:
To https://github.com/JRAntra/FRE-Training-04252022.git
 * [new branch]      feature/stephen/A2A-12 -> feature/stephen/A2A-12
Branch 'feature/stephen/A2A-12' set up to track remote branch 'feature/stephen/A2A-12' from 'origin'.
error: update_ref failed for ref 'refs/remotes/origin/feature/stephen/A2A-12': cannot lock ref 'refs/remotes/origin/feature/stephen/A2A-12': 'refs/remotes/origin/feature/stephen' exists; cannot create 'refs/remotes/origin/feature/stephen/A2A-12'
Han-MBPro-10% git update-ref -d refs/remotes/origin/feature/stephen
Han-MBPro-10% git add .
Han-MBPro-10% git commit -m "recommit"
On branch feature/stephen/A2A-12
Your branch is based on 'origin/feature/stephen/A2A-12', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

nothing to commit, working tree clean
Han-MBPro-10% git branch --unset-upstream
Han-MBPro-10% git add .
Han-MBPro-10% git commit -m "recommit"
On branch feature/stephen/A2A-12
nothing to commit, working tree clean
Han-MBPro-10% git push
fatal: The current branch feature/stephen/A2A-12 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/stephen/A2A-12

Han-MBPro-10% git push --set-upstream origin feature/stephen/A2A-12
Branch 'feature/stephen/A2A-12' set up to track remote branch 'feature/stephen/A2A-12' from 'origin'.
Everything up-to-date
Han-MBPro-10%

```

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
