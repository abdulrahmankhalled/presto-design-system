import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-color-showcase',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="p-8 space-y-8">
      <h2 class="text-3xl font-bold text-presto-text-primary mb-8">
        PRESTO Design System
      </h2>

      <!-- Brand Primary Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Primary Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-primary-100">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#CCDDD8</p>
            <p class="text-xs">rgba(204, 221, 216, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-primary-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#99BCB1</p>
            <p class="text-xs">rgba(153, 188, 177, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-primary-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#669A8B</p>
            <p class="text-xs">rgba(102, 154, 139, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-primary-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#337964</p>
            <p class="text-xs">rgba(51, 121, 100, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-primary-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#00573D</p>
            <p class="text-xs">rgba(0, 87, 61, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-primary-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#004631</p>
            <p class="text-xs">rgba(0, 70, 49, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-primary-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#003425</p>
            <p class="text-xs">rgba(0, 52, 37, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-primary-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#002318</p>
            <p class="text-xs">rgba(0, 35, 24, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-primary-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#00110C</p>
            <p class="text-xs">rgba(0, 17, 12, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Brand Secondary Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Secondary Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-secondary-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#CCDBE8</p>
            <p class="text-xs">rgba(204, 219, 232, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#004B8D</p>
            <p class="text-xs">rgba(0, 75, 141, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#6693BB</p>
            <p class="text-xs">rgba(102, 147, 187, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#336FA4</p>
            <p class="text-xs">rgba(51, 111, 164, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#004B8D</p>
            <p class="text-xs">rgba(0, 75, 141, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#003C71</p>
            <p class="text-xs">rgba(0, 60, 113, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#002D55</p>
            <p class="text-xs">rgba(0, 45, 85, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#001E38</p>
            <p class="text-xs">rgba(0, 30, 56, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-secondary-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#000F1C</p>
            <p class="text-xs">rgba(0, 15, 28, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Brand Gray Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Gray Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-gray-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#F5F8FA</p>
            <p class="text-xs">rgba(245, 248, 250, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-gray-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#EBF1F6</p>
            <p class="text-xs">rgba(235, 241, 246, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-gray-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#E0E9F1</p>
            <p class="text-xs">rgba(224, 233, 241, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-gray-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#D6E2ED</p>
            <p class="text-xs">rgba(214, 226, 237, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-gray-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#CCDBE8</p>
            <p class="text-xs">rgba(204, 219, 232, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-gray-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#A3AFBA</p>
            <p class="text-xs">rgba(163, 175, 186, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-gray-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#7A838B</p>
            <p class="text-xs">rgba(122, 131, 139, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-gray-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#52585D</p>
            <p class="text-xs">rgba(82, 88, 93, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-gray-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#292C2E</p>
            <p class="text-xs">rgba(41, 44, 46, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Success Colors (Green) -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Success Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 50 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-green-50 ">
            <p class="text-sm font-semibold">50</p>
            <p class="text-base font-bold">#D3F3DF</p>
            <p class="text-xs">rgba(211, 243, 223, 50%)</p>
          </div>
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-green-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#D3F3DF</p>
            <p class="text-xs">rgba(211, 243, 223, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-green-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#A7E8BF</p>
            <p class="text-xs">rgba(167, 232, 191, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-green-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#7ADC9E</p>
            <p class="text-xs">rgba(122, 220, 158, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#4ED17E</p>
            <p class="text-xs">rgba(78, 209, 126, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#22C55E</p>
            <p class="text-xs">rgba(34, 197, 94, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#1B9E4B</p>
            <p class="text-xs">rgba(27, 158, 75, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#147638</p>
            <p class="text-xs">rgba(20, 118, 56, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#0E4F26</p>
            <p class="text-xs">rgba(14, 79, 38, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-green-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#072713</p>
            <p class="text-xs">rgba(7, 39, 19, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Warn Colors (Yellow) -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Warn Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-warn-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#FBF0CE</p>
            <p class="text-xs">rgba(251, 240, 206, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-warn-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#F7E19C</p>
            <p class="text-xs">rgba(247, 225, 156, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-warn-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#F2D16B</p>
            <p class="text-xs">rgba(242, 209, 107, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-warn-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#EEC239</p>
            <p class="text-xs">rgba(238, 194, 57, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-warn-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#EAB308</p>
            <p class="text-xs">rgba(234, 179, 8, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-warn-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#BB8F06</p>
            <p class="text-xs">rgba(187, 143, 6, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-warn-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#8C6B05</p>
            <p class="text-xs">rgba(140, 107, 5, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-warn-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#5E4803</p>
            <p class="text-xs">rgba(94, 72, 3, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-warn-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#2F2402</p>
            <p class="text-xs">rgba(47, 36, 2, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Help Colors (Fuchsia) -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Help Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-help-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#F7DAFC</p>
            <p class="text-xs">rgba(247, 218, 252, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-help-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#F0B5F9</p>
            <p class="text-xs">rgba(240, 181, 249, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-help-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#E890F5</p>
            <p class="text-xs">rgba(232, 144, 245, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#E16BF2</p>
            <p class="text-xs">rgba(225, 107, 242, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#D946EF</p>
            <p class="text-xs">rgba(217, 70, 239, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#AE38BF</p>
            <p class="text-xs">rgba(174, 56, 191, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#822A8F</p>
            <p class="text-xs">rgba(130, 42, 143, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#571C60</p>
            <p class="text-xs">rgba(87, 28, 96, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-help-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#2B0E30</p>
            <p class="text-xs">rgba(43, 14, 48, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Danger Colors (Rose) -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Danger Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-danger-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#FDD9DF</p>
            <p class="text-xs">rgba(253, 217, 223, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-danger-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#FBB2BF</p>
            <p class="text-xs">rgba(251, 178, 191, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-danger-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#F88C9E</p>
            <p class="text-xs">rgba(248, 140, 158, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#F6657E</p>
            <p class="text-xs">rgba(246, 101, 126, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#F43F5E</p>
            <p class="text-xs">rgba(244, 63, 94, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#C3324B</p>
            <p class="text-xs">rgba(195, 50, 75, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#922638</p>
            <p class="text-xs">rgba(146, 38, 56, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#621926</p>
            <p class="text-xs">rgba(98, 25, 38, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-danger-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#310D13</p>
            <p class="text-xs">rgba(49, 13, 19, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Info Colors (Sky) -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Info Colors
        </h3>
        <div class="grid grid-cols-6 gap-4">
          <!-- Shade 50 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-info-50 ">
            <p class="text-sm font-semibold">50</p>
            <p class="text-base font-bold">#D2F1F9</p>
            <p class="text-xs">rgba(210, 241, 249, 50%)</p>
          </div>
          <!-- Shade 100 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-info-100 ">
            <p class="text-sm font-semibold">100</p>
            <p class="text-base font-bold">#D2F1F9</p>
            <p class="text-xs">rgba(210, 241, 249, 100%)</p>
          </div>
          <!-- Shade 200 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-info-200 ">
            <p class="text-sm font-semibold">200</p>
            <p class="text-base font-bold">#A5E2F2</p>
            <p class="text-xs">rgba(165, 226, 242, 100%)</p>
          </div>
          <!-- Shade 300 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-info-300 ">
            <p class="text-sm font-semibold">300</p>
            <p class="text-base font-bold">#77D4EC</p>
            <p class="text-xs">rgba(119, 212, 236, 100%)</p>
          </div>
          <!-- Shade 400 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-400 ">
            <p class="text-sm font-semibold">400</p>
            <p class="text-base font-bold">#4AC5E5</p>
            <p class="text-xs">rgba(74, 197, 229, 100%)</p>
          </div>
          <!-- Shade 500 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-500 ">
            <p class="text-sm font-semibold">500</p>
            <p class="text-base font-bold">#1DB7DF</p>
            <p class="text-xs">rgba(29, 183, 223, 100%)</p>
          </div>
          <!-- Shade 600 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-600 ">
            <p class="text-sm font-semibold">600</p>
            <p class="text-base font-bold">#1792B2</p>
            <p class="text-xs">rgba(23, 146, 178, 100%)</p>
          </div>
          <!-- Shade 700 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-700 ">
            <p class="text-sm font-semibold">700</p>
            <p class="text-base font-bold">#116E86</p>
            <p class="text-xs">rgba(17, 110, 134, 100%)</p>
          </div>
          <!-- Shade 800 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-800 ">
            <p class="text-sm font-semibold">800</p>
            <p class="text-base font-bold">#0C4959</p>
            <p class="text-xs">rgba(12, 73, 89, 100%)</p>
          </div>
          <!-- Shade 900 -->
          <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-info-900 ">
            <p class="text-sm font-semibold">900</p>
            <p class="text-base font-bold">#06252D</p>
            <p class="text-xs">rgba(6, 37, 45, 100%)</p>
          </div>
        </div>
      </div>

      <!-- Additional Color Palettes -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Additional Color Palettes
        </h3>
        
        <!-- Purple Colors -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Purple</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- Shade 100 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-purple-100 ">
              <p class="text-sm font-semibold">100</p>
              <p class="text-base font-bold">#EEDDFD</p>
              <p class="text-xs">rgba(238, 221, 253, 100%)</p>
            </div>
            <!-- Shade 200 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-purple-200 ">
              <p class="text-sm font-semibold">200</p>
              <p class="text-base font-bold">#DDBCFB</p>
              <p class="text-xs">rgba(221, 188, 251, 100%)</p>
            </div>
            <!-- Shade 300 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-purple-300 ">
              <p class="text-sm font-semibold">300</p>
              <p class="text-base font-bold">#CC9AF9</p>
              <p class="text-xs">rgba(204, 154, 249, 100%)</p>
            </div>
            <!-- Shade 400 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-purple-400 ">
              <p class="text-sm font-semibold">400</p>
              <p class="text-base font-bold">#BB78F7</p>
              <p class="text-xs">rgba(187, 120, 247, 100%)</p>
            </div>
            <!-- Shade 500 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-purple-500 ">
              <p class="text-sm font-semibold">500</p>
              <p class="text-base font-bold">#A855F7</p>
              <p class="text-xs">rgba(168, 85, 247, 100%)</p>
            </div>
            <!-- Shade 900 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-purple-900 ">
              <p class="text-sm font-semibold">900</p>
              <p class="text-base font-bold">#221131</p>
              <p class="text-xs">rgba(34, 17, 49, 100%)</p>
            </div>
          </div>
        </div>

        <!-- Pink Colors -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Pink</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- Shade 100 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-pink-100 ">
              <p class="text-sm font-semibold">100</p>
              <p class="text-base font-bold">#FBDAEB</p>
              <p class="text-xs">rgba(251, 218, 235, 100%)</p>
            </div>
            <!-- Shade 200 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-pink-200 ">
              <p class="text-sm font-semibold">200</p>
              <p class="text-base font-bold">#F7B6D6</p>
              <p class="text-xs">rgba(247, 182, 214, 100%)</p>
            </div>
            <!-- Shade 300 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-pink-300 ">
              <p class="text-sm font-semibold">300</p>
              <p class="text-base font-bold">#F491C2</p>
              <p class="text-xs">rgba(244, 145, 194, 100%)</p>
            </div>
            <!-- Shade 400 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-pink-400 ">
              <p class="text-sm font-semibold">400</p>
              <p class="text-base font-bold">#F06DAD</p>
              <p class="text-xs">rgba(240, 109, 173, 100%)</p>
            </div>
            <!-- Shade 500 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-pink-500 ">
              <p class="text-sm font-semibold">500</p>
              <p class="text-base font-bold">#EC4899</p>
              <p class="text-xs">rgba(236, 72, 153, 100%)</p>
            </div>
            <!-- Shade 900 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-pink-900 ">
              <p class="text-sm font-semibold">900</p>
              <p class="text-base font-bold">#2F0E1F</p>
              <p class="text-xs">rgba(47, 14, 31, 100%)</p>
            </div>
          </div>
        </div>

        <!-- Neutral Colors -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Neutral</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- Shade 100 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-neutral-100 ">
              <p class="text-sm font-semibold">100</p>
              <p class="text-base font-bold">#FCFCFC</p>
              <p class="text-xs">rgba(252, 252, 252, 100%)</p>
            </div>
            <!-- Shade 200 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-neutral-200 ">
              <p class="text-sm font-semibold">200</p>
              <p class="text-base font-bold">#F8F8F8</p>
              <p class="text-xs">rgba(248, 248, 248, 100%)</p>
            </div>
            <!-- Shade 300 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-neutral-300 ">
              <p class="text-sm font-semibold">300</p>
              <p class="text-base font-bold">#F5F5F5</p>
              <p class="text-xs">rgba(245, 245, 245, 100%)</p>
            </div>
            <!-- Shade 400 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-neutral-400 ">
              <p class="text-sm font-semibold">400</p>
              <p class="text-base font-bold">#F1F1F1</p>
              <p class="text-xs">rgba(241, 241, 241, 100%)</p>
            </div>
            <!-- Shade 500 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-neutral-500 ">
              <p class="text-sm font-semibold">500</p>
              <p class="text-base font-bold">#EEEEEE</p>
              <p class="text-xs">rgba(238, 238, 238, 100%)</p>
            </div>
            <!-- Shade 900 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-neutral-900 ">
              <p class="text-sm font-semibold">900</p>
              <p class="text-base font-bold">#303030</p>
              <p class="text-xs">rgba(48, 48, 48, 100%)</p>
            </div>
          </div>
        </div>

        <!-- Slate Colors -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Slate</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- Shade 100 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-slate-100 ">
              <p class="text-sm font-semibold">100</p>
              <p class="text-base font-bold">#E1E4E8</p>
              <p class="text-xs">rgba(225, 228, 232, 100%)</p>
            </div>
            <!-- Shade 200 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-slate-200 ">
              <p class="text-sm font-semibold">200</p>
              <p class="text-base font-bold">#C3C9D0</p>
              <p class="text-xs">rgba(195, 201, 208, 100%)</p>
            </div>
            <!-- Shade 300 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-slate-300 ">
              <p class="text-sm font-semibold">300</p>
              <p class="text-base font-bold">#A6ADB9</p>
              <p class="text-xs">rgba(166, 173, 185, 100%)</p>
            </div>
            <!-- Shade 400 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-slate-400 ">
              <p class="text-sm font-semibold">400</p>
              <p class="text-base font-bold">#8892A1</p>
              <p class="text-xs">rgba(136, 146, 161, 100%)</p>
            </div>
            <!-- Shade 500 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-slate-500 ">
              <p class="text-sm font-semibold">500</p>
              <p class="text-base font-bold">#6A778A</p>
              <p class="text-xs">rgba(106, 119, 138, 100%)</p>
            </div>
            <!-- Shade 900 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-slate-900 ">
              <p class="text-sm font-semibold">900</p>
              <p class="text-base font-bold">#15181C</p>
              <p class="text-xs">rgba(21, 24, 28, 100%)</p>
            </div>
          </div>
        </div>

        <!-- Indigo Colors -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Indigo</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- Shade 100 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-indigo-100 ">
              <p class="text-sm font-semibold">100</p>
              <p class="text-base font-bold">#E0E0FC</p>
              <p class="text-xs">rgba(224, 224, 252, 100%)</p>
            </div>
            <!-- Shade 200 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-indigo-200 ">
              <p class="text-sm font-semibold">200</p>
              <p class="text-base font-bold">#C1C2FB</p>
              <p class="text-xs">rgba(193, 194, 251, 100%)</p>
            </div>
            <!-- Shade 300 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-indigo-300 ">
              <p class="text-sm font-semibold">300</p>
              <p class="text-base font-bold">#A1A3F7</p>
              <p class="text-xs">rgba(161, 163, 247, 100%)</p>
            </div>
            <!-- Shade 400 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-indigo-400 ">
              <p class="text-sm font-semibold">400</p>
              <p class="text-base font-bold">#B295F4</p>
              <p class="text-xs">rgba(178, 149, 244, 100%)</p>
            </div>
            <!-- Shade 500 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-indigo-500 ">
              <p class="text-sm font-semibold">500</p>
              <p class="text-base font-bold">#6366F1</p>
              <p class="text-xs">rgba(99, 102, 241, 100%)</p>
            </div>
            <!-- Shade 900 -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-indigo-900 ">
              <p class="text-sm font-semibold">900</p>
              <p class="text-base font-bold">#141430</p>
              <p class="text-xs">rgba(20, 20, 48, 100%)</p>
            </div>
          </div>
        </div>

        <!-- Primary Colors (White/Black) -->
        <div class="space-y-2">
          <h4 class="text-lg font-medium text-presto-text-primary">Primary</h4>
          <div class="grid grid-cols-6 gap-4">
            <!-- White -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-white ">
              <p class="text-sm font-semibold">White</p>
              <p class="text-base font-bold">#FFFFFF</p>
              <p class="text-xs">rgba(255, 255, 255, 100%)</p>
            </div>
            <!-- White 50% -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-white-50 ">
              <p class="text-sm font-semibold">White 50%</p>
              <p class="text-base font-bold">#FFFFFF80</p>
              <p class="text-xs">rgba(255, 255, 255, 50%)</p>
            </div>
            <!-- White 10% -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-black bg-presto-white-10 ">
              <p class="text-sm font-semibold">White 10%</p>
              <p class="text-base font-bold">#FFFFFF1A</p>
              <p class="text-xs">rgba(255, 255, 255, 10%)</p>
            </div>
            <!-- Black -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-black ">
              <p class="text-sm font-semibold">Black</p>
              <p class="text-base font-bold">#000000</p>
              <p class="text-xs">rgba(0, 0, 0, 100%)</p>
            </div>
            <!-- Black 50% -->
            <div class="h-32 rounded-lg p-4 flex flex-col justify-between items-start text-white bg-presto-black-50 ">
              <p class="text-sm font-semibold">Black 50%</p>
              <p class="text-base font-bold">#00000080</p>
              <p class="text-xs">rgba(0, 0, 0, 50%)</p>
            </div>
            <!-- Empty cell for grid alignment -->
            <div></div>
          </div>
        </div>
      </div>

      <!-- Button Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          PrimeNG Buttons
        </h3>
        <div class="flex flex-wrap gap-4">
          <p-button label="Primary Button" severity="primary"></p-button>
          <p-button label="Secondary Button" severity="secondary"></p-button>
        </div>
      </div>

      <!-- Border Radius Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Border Radius Tokens
        </h3>
        <div class="grid grid-cols-4 gap-4">
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-none flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >None</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">0px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-none</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xs flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XS</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">4px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xs</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-sm flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >SM</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">8px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-sm</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-md flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >MD</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">12px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-md</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-lg flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >LG</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">24px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-lg</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xl flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XL</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">28px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xl</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xxl flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XXL</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">32px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xxl</p>
          </div>
        </div>
      </div>

      <!-- Usage Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Usage Examples
        </h3>
        <div class="space-y-4">
          <div
            class="p-4 bg-presto-surface-100 rounded-presto-md "
          >
            <p class="text-presto-text-primary">
              Background:
              <code
                class="bg-presto-surface-200 px-2 py-1 rounded-presto-xs text-sm"
                >bg-presto-surface-100</code
              >
            </p>
          </div>
          <div
            class="p-4 bg-presto-primary text-presto-primary-contrast rounded-presto-md"
          >
            <p>
              Primary Button:
              <code
                class="bg-presto-primary-hover px-2 py-1 rounded-presto-xs text-sm"
                >bg-presto-primary</code
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ColorShowcaseComponent {}