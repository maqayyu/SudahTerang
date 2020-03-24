const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Вписываем значение нашего объекта (facemash,rectangle, plane и тд)
// Далее пишем название нашего объекта (важно)
const rectangle = Scene.root.find('LUT');

// Set an index of 0
// ОСтавляеете как есть:)
const index = 0;
const configuration = {
  selectedIndex: index,

  // Здесь самое важное!
  // Нужно указать название текстур, которые будут у вас в качестве иконок для кнопок!
  // Важно задать им легкие названия, чтобы было проще. Давайте загрузим отдельно иконки.
  items: [
    {image_texture: Textures.get('1')},
    {image_texture: Textures.get('2')},
    {image_texture: Textures.get('3')},
{image_texture: Textures.get('4')}
  ],

  // Тут указываем названия наших Материалов! (v1,v2,v3 и тд так же называйте для удобства)
  mats: [
    {material: Materials.get("v1")},
    {material: Materials.get("v2")},
    {material: Materials.get("v3")},
{material: Materials.get("v4")}
  ]
};

// Строка включает наше меню. 
const picker = NativeUI.picker;

// Загрузка меню
picker.configure(configuration);

// Тут ничего не трогайте, главное, чтобы было прописано true.
picker.visible = true;

// Тут тоже есть важная часть. 
picker.selectedIndex.monitor().subscribe(function(val) {

    // Указываете название вашего объекта, так же здесь!
 rectangle.material = configuration.mats[val.newValue].material;

   
});