async function includeHTML() {
            const elements = document.querySelectorAll('[data-include]');
            for (const el of elements) {
                const filePath = el.getAttribute('data-include');
                try {
                    const response = await fetch(filePath);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const html = await response.text();
                    el.innerHTML = html;
                    // Remove the data-include attribute once loaded
                    el.removeAttribute('data-include');
                } catch (error) {
                    console.error(`Error loading HTML for ${filePath}:`, error);
                }
            }
        }

    document.addEventListener('DOMContentLoaded', includeHTML);