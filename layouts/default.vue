<template>
    
  <!-- Sidebar -->
  <aside class="bg-gray-900 text-white h-screen w-64 fixed flex flex-col">
    <!-- Sidebar content -->
    <!-- You can add your sidebar content here -->
    <UiSidebar />
    
  </aside>

  <!-- Main content -->
  <main class="ml-64 p-4">
    <!-- Navbar -->
    <nav class="bg-gray-800 text-white p-4">
      <!-- Navbar content -->
      <!-- You can add your navbar content here -->
    </nav>

    <!-- Page content -->
    <section class="bg-white p-4">
      <!-- Page content -->
      <!-- You can add your page content here -->
      <slot />
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
    <!-- Footer content -->
    <!-- You can add your footer content here -->

    <div>
      <h2>Copyright @ 2023 warmind2x inc</h2>
    </div>
  </footer>


</template>

<script setup>

</script>