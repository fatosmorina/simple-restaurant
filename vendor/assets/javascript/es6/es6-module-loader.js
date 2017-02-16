





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d7137690e30123bade38abb082ac79f36cc7a105ff92e602405f53b725465cab.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ca05371259dcac7e46d20df340b58a39d7c675dff23c67eeef701a9532c23763.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-9628bfea02884cc06cee3aa24062d81f93e06de09ed5bac5557deb155500e539.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>es6-module-loader/es6-module-loader.js at master · dmail-fork/es6-module-loader · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/13675395?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="dmail-fork/es6-module-loader" property="og:title" /><meta content="https://github.com/dmail-fork/es6-module-loader" property="og:url" /><meta content="es6-module-loader - Polyfill for the ES6 Module Loader" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="FF46:6DB3:357537E:581079F:59E7A0ED" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FF46:6DB3:357537E:581079F:59E7A0ED" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YzlkOTQ3ZGIxNzRmM2NhZWU2YzE5OTY3ZjAxZWI5ZDc5YWE4MTg2MDUxMWRmMGI4YzlmNmFhNjE0ODkzZWJhNXx7InJlbW90ZV9hZGRyZXNzIjoiNDYuOTkuOS4yNTEiLCJyZXF1ZXN0X2lkIjoiRkY0Njo2REIzOjM1NzUzN0U6NTgxMDc5Rjo1OUU3QTBFRCIsInRpbWVzdGFtcCI6MTUwODM1MjIzOCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="7095f464d10117f143119bf0bd8b53b817d566f3">

  <meta http-equiv="x-pjax-version" content="3ad95ecc7a8a96c4eb6a06993a0a0cbd">
  

      <link href="https://github.com/dmail-fork/es6-module-loader/commits/master.atom" rel="alternate" title="Recent Commits to es6-module-loader:master" type="application/atom+xml">

  <meta name="description" content="es6-module-loader - Polyfill for the ES6 Module Loader">
  <meta name="go-import" content="github.com/dmail-fork/es6-module-loader git https://github.com/dmail-fork/es6-module-loader.git">

  <meta content="13675395" name="octolytics-dimension-user_id" /><meta content="dmail-fork" name="octolytics-dimension-user_login" /><meta content="50171468" name="octolytics-dimension-repository_id" /><meta content="dmail-fork/es6-module-loader" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="4380969" name="octolytics-dimension-repository_parent_id" /><meta content="ModuleLoader/es-module-loader" name="octolytics-dimension-repository_parent_nwo" /><meta content="4380969" name="octolytics-dimension-repository_network_root_id" /><meta content="ModuleLoader/es-module-loader" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/dmail-fork/es6-module-loader/blob/master/dist/es6-module-loader.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dmail-fork/es6-module-loader/search" class="js-site-search-form" data-scoped-search-url="/dmail-fork/es6-module-loader/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/dmail-fork/es6-module-loader/blob/master/dist/es6-module-loader.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fdmail-fork%2Fes6-module-loader%2Fblob%2Fmaster%2Fdist%2Fes6-module-loader.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



  



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav ">
      <div class="repohead-details-container clearfix container ">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fdmail-fork%2Fes6-module-loader"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/dmail-fork/es6-module-loader/watchers"
     aria-label="1 user is watching this repository">
    1
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdmail-fork%2Fes6-module-loader"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/dmail-fork/es6-module-loader/stargazers"
      aria-label="0 users starred this repository">
      0
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdmail-fork%2Fes6-module-loader"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/dmail-fork/es6-module-loader/network" class="social-count"
       aria-label="167 users forked this repository">
      167
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a href="/dmail-fork" class="url fn" rel="author">dmail-fork</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/dmail-fork/es6-module-loader" data-pjax="#js-repo-pjax-container">es6-module-loader</a></strong>

    <span class="fork-flag">
      <span class="text">forked from <a href="/ModuleLoader/es-module-loader">ModuleLoader/es-module-loader</a></span>
    </span>
</h1>

      </div>
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/dmail-fork/es6-module-loader" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /dmail-fork/es6-module-loader" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/dmail-fork/es6-module-loader/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /dmail-fork/es6-module-loader/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/dmail-fork/es6-module-loader/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /dmail-fork/es6-module-loader/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a href="/dmail-fork/es6-module-loader/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /dmail-fork/es6-module-loader/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/dmail-fork/es6-module-loader/blob/a11ee53090f6aa37d83c6ab0cc5a36598806bf92/dist/es6-module-loader.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:a99437c3ac09e29a714acde2fe228f5e -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/dmail-fork/es6-module-loader/blob/1.0/dist/es6-module-loader.js"
               data-name="1.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/dmail-fork/es6-module-loader/blob/gh-pages/dist/es6-module-loader.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/dmail-fork/es6-module-loader/blob/master/dist/es6-module-loader.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/dmail-fork/es6-module-loader/blob/registry-constructor/dist/es6-module-loader.js"
               data-name="registry-constructor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                registry-constructor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/dmail-fork/es6-module-loader/blob/registry/dist/es6-module-loader.js"
               data-name="registry"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                registry
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.10/dist/es6-module-loader.js"
              data-name="v0.17.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.10">
                v0.17.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.9/dist/es6-module-loader.js"
              data-name="v0.17.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.9">
                v0.17.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.8/dist/es6-module-loader.js"
              data-name="v0.17.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.8">
                v0.17.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.7/dist/es6-module-loader.js"
              data-name="v0.17.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.7">
                v0.17.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.6/dist/es6-module-loader.js"
              data-name="v0.17.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.6">
                v0.17.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.5/dist/es6-module-loader.js"
              data-name="v0.17.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.5">
                v0.17.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.4/dist/es6-module-loader.js"
              data-name="v0.17.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.4">
                v0.17.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.3/dist/es6-module-loader.js"
              data-name="v0.17.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.3">
                v0.17.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.2/dist/es6-module-loader.js"
              data-name="v0.17.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.2">
                v0.17.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.1/dist/es6-module-loader.js"
              data-name="v0.17.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.1">
                v0.17.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.17.0/dist/es6-module-loader.js"
              data-name="v0.17.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.0">
                v0.17.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.6/dist/es6-module-loader.js"
              data-name="v0.16.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.6">
                v0.16.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.5/dist/es6-module-loader.js"
              data-name="v0.16.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.5">
                v0.16.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.4/dist/es6-module-loader.js"
              data-name="v0.16.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.4">
                v0.16.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.3/dist/es6-module-loader.js"
              data-name="v0.16.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.3">
                v0.16.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.2/dist/es6-module-loader.js"
              data-name="v0.16.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.2">
                v0.16.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.1/dist/es6-module-loader.js"
              data-name="v0.16.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.1">
                v0.16.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.16.0/dist/es6-module-loader.js"
              data-name="v0.16.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.0">
                v0.16.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.15.0/dist/es6-module-loader.js"
              data-name="v0.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0">
                v0.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.14.0/dist/es6-module-loader.js"
              data-name="v0.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.14.0">
                v0.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.13.1/dist/es6-module-loader.js"
              data-name="v0.13.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.13.1">
                v0.13.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.13.0/dist/es6-module-loader.js"
              data-name="v0.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.13.0">
                v0.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.12.0/dist/es6-module-loader.js"
              data-name="v0.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.0">
                v0.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.11.2/dist/es6-module-loader.js"
              data-name="v0.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.2">
                v0.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.11.1/dist/es6-module-loader.js"
              data-name="v0.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.1">
                v0.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.11.0/dist/es6-module-loader.js"
              data-name="v0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.0">
                v0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.10.0/dist/es6-module-loader.js"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.9.4/dist/es6-module-loader.js"
              data-name="v0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.4">
                v0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.9.3/dist/es6-module-loader.js"
              data-name="v0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.3">
                v0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.9.2/dist/es6-module-loader.js"
              data-name="v0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.2">
                v0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.9.1/dist/es6-module-loader.js"
              data-name="v0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.1">
                v0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.9.0/dist/es6-module-loader.js"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.8.2/dist/es6-module-loader.js"
              data-name="v0.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.2">
                v0.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.8.1/dist/es6-module-loader.js"
              data-name="v0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.1">
                v0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.8.0/dist/es6-module-loader.js"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.7.2/dist/es6-module-loader.js"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.7.1/dist/es6-module-loader.js"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.7.0/dist/es6-module-loader.js"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.6.1/dist/es6-module-loader.js"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.6.0/dist/es6-module-loader.js"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.5.4/dist/es6-module-loader.js"
              data-name="v0.5.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.4">
                v0.5.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.5.1/dist/es6-module-loader.js"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.5.0/dist/es6-module-loader.js"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.4.3/dist/es6-module-loader.js"
              data-name="v0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.3">
                v0.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.4.2/dist/es6-module-loader.js"
              data-name="v0.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.2">
                v0.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.4.1/dist/es6-module-loader.js"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.4.0/dist/es6-module-loader.js"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.3.3/dist/es6-module-loader.js"
              data-name="v0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.3">
                v0.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.3.2/dist/es6-module-loader.js"
              data-name="v0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.2">
                v0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.3.0/dist/es6-module-loader.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.2.4/dist/es6-module-loader.js"
              data-name="v0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.4">
                v0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.2.3/dist/es6-module-loader.js"
              data-name="v0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3">
                v0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.2.2/dist/es6-module-loader.js"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/dmail-fork/es6-module-loader/tree/v0.2.1/dist/es6-module-loader.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/dmail-fork/es6-module-loader/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/dmail-fork/es6-module-loader"><span>es6-module-loader</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/dmail-fork/es6-module-loader/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">es6-module-loader.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/dmail-fork/es6-module-loader/commit/0d969925ad7db6b419769bd795a12d44d95b2192" data-pjax>
          0d96992
        </a>
        <relative-time datetime="2016-01-05T16:36:29Z">Jan 5, 2016</relative-time>
      </span>
      <div>
        <img alt="@guybedford" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/598730?s=40&amp;v=4" width="20" />
        <a href="/guybedford" class="user-mention" rel="contributor">guybedford</a>
          <a href="/dmail-fork/es6-module-loader/commit/0d969925ad7db6b419769bd795a12d44d95b2192" class="message" data-pjax="true" title="v0.17.10">v0.17.10</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>8</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="guybedford" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=guybedford"><img alt="@guybedford" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/598730?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="addyosmani" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=addyosmani"><img alt="@addyosmani" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/110953?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="josh" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=josh"><img alt="@josh" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/137?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paulirish" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=paulirish"><img alt="@paulirish" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/39191?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="masondesu" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=masondesu"><img alt="@masondesu" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/434750?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="johnjbarton" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=johnjbarton"><img alt="@johnjbarton" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/205570?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="crisptrutski" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=crisptrutski"><img alt="@crisptrutski" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/881351?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="caridy" href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js?author=caridy"><img alt="@caridy" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/38969?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@guybedford" height="24" src="https://avatars2.githubusercontent.com/u/598730?s=48&amp;v=4" width="24" />
            <a href="/guybedford">guybedford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@addyosmani" height="24" src="https://avatars0.githubusercontent.com/u/110953?s=48&amp;v=4" width="24" />
            <a href="/addyosmani">addyosmani</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@josh" height="24" src="https://avatars2.githubusercontent.com/u/137?s=48&amp;v=4" width="24" />
            <a href="/josh">josh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@paulirish" height="24" src="https://avatars3.githubusercontent.com/u/39191?s=48&amp;v=4" width="24" />
            <a href="/paulirish">paulirish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@masondesu" height="24" src="https://avatars1.githubusercontent.com/u/434750?s=48&amp;v=4" width="24" />
            <a href="/masondesu">masondesu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@johnjbarton" height="24" src="https://avatars3.githubusercontent.com/u/205570?s=48&amp;v=4" width="24" />
            <a href="/johnjbarton">johnjbarton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@crisptrutski" height="24" src="https://avatars2.githubusercontent.com/u/881351?s=48&amp;v=4" width="24" />
            <a href="/crisptrutski">crisptrutski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@caridy" height="24" src="https://avatars2.githubusercontent.com/u/38969?s=48&amp;v=4" width="24" />
            <a href="/caridy">caridy</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/dmail-fork/es6-module-loader/raw/master/dist/es6-module-loader.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/dmail-fork/es6-module-loader/blame/master/dist/es6-module-loader.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/dmail-fork/es6-module-loader/commits/master/dist/es6-module-loader.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      8 lines (7 sloc)
      <span class="file-info-divider"></span>
    13.6 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  es6-module-loader v0.17.10</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  https://github.com/ModuleLoader/es6-module-loader</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Copyright (c) 2016 Guy Bedford, Luke Hoban, Addy Osmani; Licensed MIT</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">!function(a){function b(a,c){if(&quot;string&quot;!=typeof a)throw new TypeError(&quot;URL must be a string&quot;);var d=String(a).replace(/^\s+|\s+$/g,&quot;&quot;).match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!d)throw new RangeError;var e=d[1]||&quot;&quot;,f=d[2]||&quot;&quot;,g=d[3]||&quot;&quot;,h=d[4]||&quot;&quot;,i=d[5]||&quot;&quot;,j=d[6]||&quot;&quot;,k=d[7]||&quot;&quot;,l=d[8]||&quot;&quot;,m=d[9]||&quot;&quot;;if(void 0!==c){var n=c instanceof b?c:new b(c),o=&quot;&quot;===e&amp;&amp;&quot;&quot;===h&amp;&amp;&quot;&quot;===f;o&amp;&amp;&quot;&quot;===k&amp;&amp;&quot;&quot;===l&amp;&amp;(l=n.search),o&amp;&amp;&quot;/&quot;!==k.charAt(0)&amp;&amp;(k=&quot;&quot;!==k?(&quot;&quot;===n.host&amp;&amp;&quot;&quot;===n.username||&quot;&quot;!==n.pathname?&quot;&quot;:&quot;/&quot;)+n.pathname.slice(0,n.pathname.lastIndexOf(&quot;/&quot;)+1)+k:n.pathname);var p=[];k.replace(/^(\.\.?(\/|$))+/,&quot;&quot;).replace(/\/(\.(\/|$))+/g,&quot;/&quot;).replace(/\/\.\.$/,&quot;/../&quot;).replace(/\/?[^\/]*/g,function(a){&quot;/..&quot;===a?p.pop():p.push(a)}),k=p.join(&quot;&quot;).replace(/^\//,&quot;/&quot;===k.charAt(0)?&quot;/&quot;:&quot;&quot;),o&amp;&amp;(j=n.port,i=n.hostname,h=n.host,g=n.password,f=n.username),&quot;&quot;===e&amp;&amp;(e=n.protocol)}&quot;file:&quot;==e&amp;&amp;(k=k.replace(/\\/g,&quot;/&quot;)),this.origin=e+(&quot;&quot;!==e||&quot;&quot;!==h?&quot;//&quot;:&quot;&quot;)+h,this.href=e+(&quot;&quot;!==e||&quot;&quot;!==h?&quot;//&quot;:&quot;&quot;)+(&quot;&quot;!==f?f+(&quot;&quot;!==g?&quot;:&quot;+g:&quot;&quot;)+&quot;@&quot;:&quot;&quot;)+h+k+l+m,this.protocol=e,this.username=f,this.password=g,this.host=h,this.hostname=i,this.port=j,this.pathname=k,this.search=l,this.hash=m}a.URLPolyfill=b}(&quot;undefined&quot;!=typeof self?self:global),function(a){function b(a,b){var c;return a instanceof Error?(c=new Error(a.message,a.fileName,a.lineNumber),i?(c.message=a.message+&quot;\n	&quot;+b,c.stack=a.stack):(c.message=a.message,c.stack=a.stack+&quot;\n	&quot;+b)):c=a+&quot;\n	&quot;+b,c}function c(a,c,d){try{new Function(a).call(d)}catch(e){throw b(e,&quot;Evaluating &quot;+c)}}function d(){}function e(b){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},k(this,&quot;global&quot;,{get:function(){return a}})}function f(){e.call(this),this.paths={}}function g(a,b){var c,d=&quot;&quot;,e=0;for(var f in a){var g=f.split(&quot;*&quot;);if(g.length&gt;2)throw new TypeError(&quot;Only one wildcard in a path is permitted&quot;);if(1==g.length){if(b==f){d=f;break}}else{var h=g[0].length;h&gt;=e&amp;&amp;b.substr(0,g[0].length)==g[0]&amp;&amp;b.substr(b.length-g[1].length)==g[1]&amp;&amp;(e=h,d=f,c=b.substr(g[0].length,b.length-g[1].length-g[0].length))}}var i=a[d];return&quot;string&quot;==typeof c&amp;&amp;(i=i.replace(&quot;*&quot;,c)),i}function h(){}var i=(&quot;undefined&quot;==typeof window&amp;&amp;&quot;undefined&quot;!=typeof self&amp;&amp;&quot;undefined&quot;!=typeof importScripts,&quot;undefined&quot;!=typeof window&amp;&amp;&quot;undefined&quot;!=typeof document),j=&quot;undefined&quot;!=typeof process&amp;&amp;&quot;undefined&quot;!=typeof process.platform&amp;&amp;!!process.platform.match(/^win/);a.console||(a.console={assert:function(){}});var k,l=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c&gt;b;b++)if(this[b]===a)return b;return-1};!function(){try{Object.defineProperty({},&quot;a&quot;,{})&amp;&amp;(k=Object.defineProperty)}catch(a){k=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var m;if(&quot;undefined&quot;!=typeof document&amp;&amp;document.getElementsByTagName){if(m=document.baseURI,!m){var n=document.getElementsByTagName(&quot;base&quot;);m=n[0]&amp;&amp;n[0].href||window.location.href}m=m.split(&quot;#&quot;)[0].split(&quot;?&quot;)[0],m=m.substr(0,m.lastIndexOf(&quot;/&quot;)+1)}else if(&quot;undefined&quot;!=typeof process&amp;&amp;process.cwd)m=&quot;file://&quot;+(j?&quot;/&quot;:&quot;&quot;)+process.cwd()+&quot;/&quot;,j&amp;&amp;(m=m.replace(/\\/g,&quot;/&quot;));else{if(&quot;undefined&quot;==typeof location)throw new TypeError(&quot;No environment baseURI&quot;);m=a.location.href}var o=a.URLPolyfill||a.URL;k(d.prototype,&quot;toString&quot;,{value:function(){return&quot;Module&quot;}}),function(){function f(a){return{status:&quot;loading&quot;,name:a,linkSets:[],dependencies:[],metadata:{}}}function g(a,b,c){return new Promise(n({step:c.address?&quot;fetch&quot;:&quot;locate&quot;,loader:a,moduleName:b,moduleMetadata:c&amp;&amp;c.metadata||{},moduleSource:c.source,moduleAddress:c.address}))}function h(a,b,c,d){return new Promise(function(e,f){e(a.loaderObj.normalize(b,c,d))}).then(function(b){var c;if(a.modules[b])return c=f(b),c.status=&quot;linked&quot;,c.module=a.modules[b],c;for(var d=0,e=a.loads.length;e&gt;d;d++)if(c=a.loads[d],c.name==b)return c;return c=f(b),a.loads.push(c),i(a,c),c})}function i(a,b){j(a,b,Promise.resolve().then(function(){return a.loaderObj.locate({name:b.name,metadata:b.metadata})}))}function j(a,b,c){m(a,b,c.then(function(c){return&quot;loading&quot;==b.status?(b.address=c,a.loaderObj.fetch({name:b.name,metadata:b.metadata,address:c})):void 0}))}function m(b,d,e){e.then(function(e){return&quot;loading&quot;==d.status?Promise.resolve(b.loaderObj.translate({name:d.name,metadata:d.metadata,address:d.address,source:e})).then(function(a){return d.source=a,b.loaderObj.instantiate({name:d.name,metadata:d.metadata,address:d.address,source:a})}).then(function(e){if(void 0===e)return d.address=d.address||&quot;&lt;Anonymous Module &quot;+ ++A+&quot;&gt;&quot;,d.isDeclarative=!0,z.call(b.loaderObj,d).then(function(b){var e=a.System,f=e.register;e.register=function(a,b,c){&quot;string&quot;!=typeof a&amp;&amp;(c=b,b=a),d.declare=c,d.depsList=b},c(b,d.address,{}),e.register=f});if(&quot;object&quot;!=typeof e)throw TypeError(&quot;Invalid instantiate return value&quot;);d.depsList=e.deps||[],d.execute=e.execute,d.isDeclarative=!1}).then(function(){d.dependencies=[];for(var a=d.depsList,c=[],e=0,f=a.length;f&gt;e;e++)(function(a,e){c.push(h(b,a,d.name,d.address).then(function(b){if(d.dependencies[e]={key:a,value:b.name},&quot;linked&quot;!=b.status)for(var c=d.linkSets.concat([]),f=0,g=c.length;g&gt;f;f++)p(c[f],b)}))})(a[e],e);return Promise.all(c)}).then(function(){d.status=&quot;loaded&quot;;for(var a=d.linkSets.concat([]),b=0,c=a.length;c&gt;b;b++)r(a[b],d)}):void 0})[&quot;catch&quot;](function(a){d.status=&quot;failed&quot;,d.exception=a;for(var b=d.linkSets.concat([]),c=0,e=b.length;e&gt;c;c++)s(b[c],d,a)})}function n(a){return function(b,c){var d=a.loader,e=a.moduleName,g=a.step;if(d.modules[e])throw new TypeError(&#39;&quot;&#39;+e+&#39;&quot; already exists in the module table&#39;);for(var h,k=0,l=d.loads.length;l&gt;k;k++)if(d.loads[k].name==e&amp;&amp;(h=d.loads[k],&quot;translate&quot;!=g||h.source||(h.address=a.moduleAddress,m(d,h,Promise.resolve(a.moduleSource))),h.linkSets.length&amp;&amp;h.linkSets[0].loads[0].name==h.name))return h.linkSets[0].done.then(function(){b(h)});var n=h||f(e);n.metadata=a.moduleMetadata;var p=o(d,n);d.loads.push(n),b(p.done),&quot;locate&quot;==g?i(d,n):&quot;fetch&quot;==g?j(d,n,Promise.resolve(a.moduleAddress)):(n.address=a.moduleAddress,m(d,n,Promise.resolve(a.moduleSource)))}}function o(a,b){var c={loader:a,loads:[],startingLoad:b,loadingCount:0};return c.done=new Promise(function(a,b){c.resolve=a,c.reject=b}),p(c,b),c}function p(a,b){if(&quot;failed&quot;!=b.status){for(var c=0,d=a.loads.length;d&gt;c;c++)if(a.loads[c]==b)return;a.loads.push(b),b.linkSets.push(a),&quot;loaded&quot;!=b.status&amp;&amp;a.loadingCount++;for(var e=a.loader,c=0,d=b.dependencies.length;d&gt;c;c++)if(b.dependencies[c]){var f=b.dependencies[c].value;if(!e.modules[f])for(var g=0,h=e.loads.length;h&gt;g;g++)if(e.loads[g].name==f){p(a,e.loads[g]);break}}}}function q(a){var b=!1;try{w(a,function(c,d){s(a,c,d),b=!0})}catch(c){s(a,null,c),b=!0}return b}function r(a,b){if(a.loadingCount--,!(a.loadingCount&gt;0)){var c=a.startingLoad;if(a.loader.loaderObj.execute===!1){for(var d=[].concat(a.loads),e=0,f=d.length;f&gt;e;e++){var b=d[e];b.module=b.isDeclarative?{name:b.name,module:B({}),evaluated:!0}:{module:B({})},b.status=&quot;linked&quot;,t(a.loader,b)}return a.resolve(c)}var g=q(a);g||a.resolve(c)}}function s(a,c,d){var e=a.loader;a:if(c)if(a.loads[0].name==c.name)d=b(d,&quot;Error loading &quot;+c.name);else{for(var f=0;f&lt;a.loads.length;f++)for(var g=a.loads[f],h=0;h&lt;g.dependencies.length;h++){var i=g.dependencies[h];if(i.value==c.name){d=b(d,&quot;Error loading &quot;+c.name+&#39; as &quot;&#39;+i.key+&#39;&quot; from &#39;+g.name);break a}}d=b(d,&quot;Error loading &quot;+c.name+&quot; from &quot;+a.loads[0].name)}else d=b(d,&quot;Error linking &quot;+a.loads[0].name);for(var j=a.loads.concat([]),f=0,k=j.length;k&gt;f;f++){var c=j[f];e.loaderObj.failed=e.loaderObj.failed||[],-1==l.call(e.loaderObj.failed,c)&amp;&amp;e.loaderObj.failed.push(c);var m=l.call(c.linkSets,a);if(c.linkSets.splice(m,1),0==c.linkSets.length){var n=l.call(a.loader.loads,c);-1!=n&amp;&amp;a.loader.loads.splice(n,1)}}a.reject(d)}function t(a,b){if(a.loaderObj.trace){a.loaderObj.loads||(a.loaderObj.loads={});var c={};b.dependencies.forEach(function(a){c[a.key]=a.value}),a.loaderObj.loads[b.name]={name:b.name,deps:b.dependencies.map(function(a){return a.key}),depMap:c,address:b.address,metadata:b.metadata,source:b.source,kind:b.isDeclarative?&quot;declarative&quot;:&quot;dynamic&quot;}}b.name&amp;&amp;(a.modules[b.name]=b.module);var d=l.call(a.loads,b);-1!=d&amp;&amp;a.loads.splice(d,1);for(var e=0,f=b.linkSets.length;f&gt;e;e++)d=l.call(b.linkSets[e].loads,b),-1!=d&amp;&amp;b.linkSets[e].loads.splice(d,1);b.linkSets.splice(0,b.linkSets.length)}function u(a,b,c){try{var e=b.execute()}catch(f){return void c(b,f)}return e&amp;&amp;e instanceof d?e:void c(b,new TypeError(&quot;Execution must define a Module instance&quot;))}function v(a,b,c){var d=a._loader.importPromises;return d[b]=c.then(function(a){return d[b]=void 0,a},function(a){throw d[b]=void 0,a})}function w(a,b){var c=a.loader;if(a.loads.length)for(var d=a.loads.concat([]),e=0;e&lt;d.length;e++){var f=d[e],g=u(a,f,b);if(!g)return;f.module={name:f.name,module:g},f.status=&quot;linked&quot;,t(c,f)}}function x(a,b){return b.module.module}function y(){}function z(){throw new TypeError(&quot;ES6 transpilation is only provided in the dev module loader build.&quot;)}var A=0;e.prototype={constructor:e,define:function(a,b,c){if(this._loader.importPromises[a])throw new TypeError(&quot;Module is already loading.&quot;);return v(this,a,new Promise(n({step:&quot;translate&quot;,loader:this._loader,moduleName:a,moduleMetadata:c&amp;&amp;c.metadata||{},moduleSource:b,moduleAddress:c&amp;&amp;c.address})))},&quot;delete&quot;:function(a){var b=this._loader;return delete b.importPromises[a],delete b.moduleRecords[a],b.modules[a]?delete b.modules[a]:!1},get:function(a){return this._loader.modules[a]?(y(this._loader.modules[a],[],this),this._loader.modules[a].module):void 0},has:function(a){return!!this._loader.modules[a]},&quot;import&quot;:function(a,b,c){&quot;object&quot;==typeof b&amp;&amp;(b=b.name);var d=this;return Promise.resolve(d.normalize(a,b)).then(function(a){var b=d._loader;return b.modules[a]?(y(b.modules[a],[],b._loader),b.modules[a].module):b.importPromises[a]||v(d,a,g(b,a,{}).then(function(c){return delete b.importPromises[a],x(b,c)}))})},load:function(a){var b=this._loader;return b.modules[a]?Promise.resolve():b.importPromises[a]||v(this,a,new Promise(n({step:&quot;locate&quot;,loader:b,moduleName:a,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete b.importPromises[a]}))},module:function(a,b){var c=f();c.address=b&amp;&amp;b.address;var d=o(this._loader,c),e=Promise.resolve(a),g=this._loader,h=d.done.then(function(){return x(g,c)});return m(g,c,e),h},newModule:function(a){if(&quot;object&quot;!=typeof a)throw new TypeError(&quot;Expected object&quot;);var b=new d,c=[];if(Object.getOwnPropertyNames&amp;&amp;null!=a)c=Object.getOwnPropertyNames(a);else for(var e in a)c.push(e);for(var f=0;f&lt;c.length;f++)(function(c){k(b,c,{configurable:!1,enumerable:!0,get:function(){return a[c]}})})(c[f]);return b},set:function(a,b){if(!(b instanceof d))throw new TypeError(&quot;Loader.set(&quot;+a+&quot;, module) must be a module&quot;);this._loader.modules[a]={module:b}},normalize:function(a,b,c){return a},locate:function(a){return a.name},fetch:function(a){},translate:function(a){return a.source},instantiate:function(a){}};var B=e.prototype.newModule}();var p;h.prototype=e.prototype,f.prototype=new h;var q=/^([^\/]+:\/\/|\/)/;f.prototype.normalize=function(a,b,c){return a=a.match(q)||&quot;.&quot;==a[0]?new o(a,b||m).href:new o(g(this.paths,a)||a,m).href},f.prototype.locate=function(a){return a.name},f.prototype.instantiate=function(b){var d=this;return Promise.resolve(d.normalize(d.transpiler)).then(function(e){return b.address===e?{deps:[],execute:function(){var e=a.System,f=a.Reflect.Loader;return c(&quot;(function(require,exports,module){&quot;+b.source+&quot;})();&quot;,b.address,a),a.System=e,a.Reflect.Loader=f,d.newModule({&quot;default&quot;:a[d.transpiler],__useDefault:!0})}}:void 0})};var r;if(&quot;undefined&quot;!=typeof XMLHttpRequest)r=function(a,b,c,d){function e(){c(g.responseText)}function f(){d(new Error(&quot;XHR error&quot;+(g.status?&quot; (&quot;+g.status+(g.statusText?&quot; &quot;+g.statusText:&quot;&quot;)+&quot;)&quot;:&quot;&quot;)+&quot; loading &quot;+a))}var g=new XMLHttpRequest,h=!0,i=!1;if(!(&quot;withCredentials&quot;in g)){var j=/^(\w+:)?\/\/([^\/]+)/.exec(a);j&amp;&amp;(h=j[2]===window.location.host,j[1]&amp;&amp;(h&amp;=j[1]===window.location.protocol))}h||&quot;undefined&quot;==typeof XDomainRequest||(g=new XDomainRequest,g.onload=e,g.onerror=f,g.ontimeout=f,g.onprogress=function(){},g.timeout=0,i=!0),g.onreadystatechange=function(){4===g.readyState&amp;&amp;(0==g.status?g.responseText?e():(g.addEventListener(&quot;error&quot;,f),g.addEventListener(&quot;load&quot;,e)):200===g.status?e():f())},g.open(&quot;GET&quot;,a,!0),g.setRequestHeader&amp;&amp;(g.setRequestHeader(&quot;Accept&quot;,&quot;application/x-es-module, */*&quot;),b&amp;&amp;(&quot;string&quot;==typeof b&amp;&amp;g.setRequestHeader(&quot;Authorization&quot;,b),g.withCredentials=!0)),i?setTimeout(function(){g.send()},0):g.send(null)};else if(&quot;undefined&quot;!=typeof require&amp;&amp;&quot;undefined&quot;!=typeof process){var s;r=function(a,b,c,d){if(&quot;file:///&quot;!=a.substr(0,8))throw new Error(&#39;Unable to fetch &quot;&#39;+a+&#39;&quot;. Only file URLs of the form file:/// allowed running in Node.&#39;);return s=s||require(&quot;fs&quot;),a=j?a.replace(/\//g,&quot;\\&quot;).substr(8):a.substr(7),s.readFile(a,function(a,b){if(a)return d(a);var e=b+&quot;&quot;;&quot;\ufeff&quot;===e[0]&amp;&amp;(e=e.substr(1)),c(e)})}}else{if(&quot;undefined&quot;==typeof self||&quot;undefined&quot;==typeof self.fetch)throw new TypeError(&quot;No environment fetch API available.&quot;);r=function(a,b,c,d){var e={headers:{Accept:&quot;application/x-es-module, */*&quot;}};b&amp;&amp;(&quot;string&quot;==typeof b&amp;&amp;(e.headers.Authorization=b),e.credentials=&quot;include&quot;),fetch(a,e).then(function(a){if(a.ok)return a.text();throw new Error(&quot;Fetch error: &quot;+a.status+&quot; &quot;+a.statusText)}).then(c,d)}}f.prototype.fetch=function(a){return new Promise(function(b,c){r(a.address,void 0,b,c)})},&quot;object&quot;==typeof exports&amp;&amp;(module.exports=e),a.Reflect=a.Reflect||{},a.Reflect.Loader=a.Reflect.Loader||e,a.Reflect.global=a.Reflect.global||a,a.LoaderPolyfill=e,p||(p=new f,p.constructor=f),&quot;object&quot;==typeof exports&amp;&amp;(module.exports=p),a.System=p}(&quot;undefined&quot;!=typeof self?self:global);</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span># sourceMappingURL=es6-module-loader.js.map</span></td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon" height="16" version="1.1" viewBox="0 0 13 4" width="14">
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
            <g transform="translate(-1.000000, -6.000000)">
                <path d="M2.5,9.5 C1.67157288,9.5 1,8.82842712 1,8 C1,7.17157288 1.67157288,6.5 2.5,6.5 C3.32842712,6.5 4,7.17157288 4,8 C4,8.82842712 3.32842712,9.5 2.5,9.5 Z M7.5,9.5 C6.67157288,9.5 6,8.82842712 6,8 C6,7.17157288 6.67157288,6.5 7.5,6.5 C8.32842712,6.5 9,7.17157288 9,8 C9,8.82842712 8.32842712,9.5 7.5,9.5 Z M12.5,9.5 C11.6715729,9.5 11,8.82842712 11,8 C11,7.17157288 11.6715729,6.5 12.5,6.5 C13.3284271,6.5 14,7.17157288 14,8 C14,8.82842712 13.3284271,9.5 12.5,9.5 Z"></path>
            </g>
        </g>
      </svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/dmail-fork/es6-module-loader/blame/a11ee53090f6aa37d83c6ab0cc5a36598806bf92/dist/es6-module-loader.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.12660s from unicorn-1980308733-zzprt">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-91f98c37fc84eac24836eec2567e9912742094369a04c4eba6e3cd1fa18902d9.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-b091f3059f3cbf6e49f0bcd7adcb3eb79f1e8efb9a57d4d35f3cec4535f2b80a.js"></script>
    
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-bdbb6560198d10308c03de469bbabc5945f2d8873f6a78521e87ce053b1b585e.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

