<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-20 md:py-32 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6 animate-slide-up">
            <span class="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              Our Mission
            </span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style="animation-delay: 0.1s">
            Making Jesus Famous,
            <span class="block mt-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              One Study at a Time
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
            I'm just a guy looking to help make Jesus famous. My goal? Make studying the Bible easier, deeper, and more accessible than ever before.
          </p>
        </div>
      </div>
    </section>

    <!-- Personal Story Section -->
    <section class="py-20 bg-white dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Why BibleStem Exists</h2>
            <p class="text-xl text-gray-600">
              A personal mission to make God's Word accessible to everyone
            </p>
          </div>

          <div class="space-y-8">
            <!-- Story Point 1 -->
            <div class="card p-8">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">🙏</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold mb-3">A Simple Mission</h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm just a guy who loves Jesus and wants to help others know Him better. I saw how difficult it can be to study the Bible deeply - especially learning Hebrew and Greek. So I thought, "Why not make this easier for everyone?"
                  </p>
                </div>
              </div>
            </div>

            <!-- Story Point 2 -->
            <div class="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">💡</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold mb-3">Making the Complex Simple</h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Deep Bible study shouldn't require a seminary degree. That's why BibleStem breaks down complex theological concepts into interactive, easy-to-understand lessons. Whether you're a beginner or a seasoned student, you'll find insights that deepen your understanding.
                  </p>
                </div>
              </div>
            </div>

            <!-- Story Point 3 -->
            <div class="card p-8">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold mb-3">Helping Jesus Become Famous</h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    At the end of the day, it's all about making Jesus famous. Every study, every lesson, every insight is designed to point people to Him. When you understand God's Word better, you know Jesus better - and when you know Jesus, you can't help but share Him with others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Us Different -->
    <section class="py-20 bg-gray-50 dark:bg-neutral-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">What Makes BibleStem Different</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're not just another Bible app. We're a movement to make deep study accessible to everyone.
        </p>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div class="card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-4xl">📚</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Interactive Learning</h3>
            <p class="text-gray-600 dark:text-gray-400">
              No passive reading. Every lesson is interactive with quizzes, reflections, and guided activities that help you truly engage with Scripture.
            </p>
          </div>

          <div class="card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-4xl">🔤</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Original Languages Made Easy</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Hebrew and Greek insights that are actually understandable. No seminary required - just pure, accessible insight into the original text.
            </p>
          </div>

          <div class="card p-8 text-center transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-4xl">💒</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Practical Application</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Every lesson ends with real-world application. Not just knowledge - but transformation that shows up in your daily life.
            </p>
          </div>
        </div>

        <!-- Scripture Quote -->
        <div class="max-w-3xl mx-auto">
          <div class="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <p class="text-2xl md:text-3xl italic text-center mb-4">
              "Thy word is a lamp unto my feet, and a light unto my path."
            </p>
            <p class="text-center text-white/80 text-lg">Psalm 119:105</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Our Core Values</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            What drives everything we do
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Value 1 -->
          <div class="card card-interactive p-8 transform hover:scale-105 transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">✝️</span>
              </div>
              <h3 class="text-2xl font-bold">Christ-Centered</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Everything points back to Jesus. Every study, every lesson, every insight is designed to help you know and follow Him better. He's the center of everything we do.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="card card-interactive p-8 transform hover:scale-105 transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">📖</span>
              </div>
              <h3 class="text-2xl font-bold">Biblically Faithful</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Every interpretation is grounded in Scripture. We don't add to or take away from God's Word - we simply help you understand it better through the original languages and contexts.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="card card-interactive p-8 transform hover:scale-105 transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🌱</span>
              </div>
              <h3 class="text-2xl font-bold">Growth-Focused</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe studying the Bible should lead to transformation, not just information. Every lesson includes practical steps to apply what you've learned in your daily life.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="card card-interactive p-8 transform hover:scale-105 transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-2xl font-bold">Accessible to All</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Deep Bible study shouldn't require expensive resources or years of training. BibleStem makes advanced study tools accessible to everyone - because everyone deserves to know Jesus better.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join the Mission -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Join the Mission</h2>
        <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Help make Jesus famous by diving deeper into His Word. Every study, every lesson, every moment spent in Scripture brings us one step closer to knowing Him better.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/sign-up" 
            class="btn bg-white text-primary-600 hover:bg-white/90 px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Studying Free
          </router-link>
          <router-link 
            to="/" 
            class="btn border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm"
          >
            Go to Home
          </router-link>
        </div>
        
        <p class="mt-8 text-white/80 italic text-lg max-w-2xl mx-auto">
          "I press toward the mark for the prize of the high calling of God in Christ Jesus." - Philippians 3:14
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// About page - making Jesus famous through accessible Bible study
</script>
