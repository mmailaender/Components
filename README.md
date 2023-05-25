Ephemeral component driven development - A new era of enterprise collaboration

# Vision
- create a new lane in the UI
- create a new component in Bit from one of the many aspects/starter templates | Or edit an existing one
- click on the Button `Develop` (The component opens in an ephemeral IDE)
- user does his changes and `bit export` it
- user merges the lane into main over UI

# Getting started
To start a Gitpod session you need to create a Gitpod Account and add your BIT_TOKEN as a Variable to `User Settings` < `Variables`
Then call the following URL but replace beforehand the `BIT_SCOPE` & `BIT_IMPORT`  variable URL encoded based on what you want to import.
`BIT_SCOPE = yourOrganization.yourScope`
`BIT_IMPORT = yourOrganization.yourScope/**`

https://gitpod.io/#BIT_SCOPE=<ADD-YOUR-ENCODED-VARIABLE>,BIT_IMPORT=<ADD-YOUR-ENCODED-VARIABLE>/https://github.com/mmailaender/Components/tree/main

With that, you get a full ephemeral development environment. After you finished your work and run `bit export` you can throw the instance away, and get a new one.

# TODO

1. To skip GitHub completely we need a native integration between Bit and Gitpod, so that Gitpod knows Bit as a source control system
2. We need an easy way to add the two variables BIT_SCOPE and BIT_IMPORT to the URL.  Gitpod has created a Plugin that shows a button at every GitHub repo. With that, the URL will be composed automatically. Having something like that in the Bit UI integrated would solve this problem.
3. Create new component from Bit UI
