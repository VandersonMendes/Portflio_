
export default function ativarDescricaoSkills() {
    const menu = document.querySelectorAll('[data-tab="link"] li');
    const container = document.querySelectorAll('[data-tab="content"] div');
    if (container.length && menu.length) {
        function activeTab(index) {
            container.forEach((section) => {
                section.classList.remove('ativo');
            })
            container[index].classList.add('ativo')
        };
        menu.forEach((item, index) => {
            item.addEventListener('click', () => activeTab(index))
        })
    }
};