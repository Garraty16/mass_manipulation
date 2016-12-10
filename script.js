function main(){
	// 1
	var a = generate_random_array(3,4,4,0,1000);
	alert_arr(a, "1) Generated Massive - ");

	// 2
	reverse_string(a, 0);
	reverse_string(a, a.length - 1);
	exchange_strings(a, 0, a.length - 1)
	alert_arr(a, "2) Reversed 1 and last string, exchanged them -");

	// 3
	a = delete_line_column_on_min(a);
	alert_arr(a, "3) Deleted line and column of min-element - ");

	// 4
	var b = create_string_array();
	alert_arr(b, "4) Array from string - ");

	// 5
	var multiplication = multiply_arrays(a, b);
	alert_arr(multiplication, "5) Multiplication - ")
}

// генерирует массив, случайного размера, со случайными элементами
function generate_random_array(minM, minN, maxSize, minVal, maxVal){
	var arr = [];
	var m = Math.floor(Math.random() * (maxSize - minM)) + minM;
	var n = Math.floor(Math.random() * (maxSize - minN)) + minN;
	for (var i = 0; i < m; i++){
		var arr_line = [];
		for (var j = 0; j < n; j++){
			arr_line.push(Math.floor(Math.random() * (maxVal - minVal)) + minVal);
		}	
		arr.push(arr_line);
	}

	return arr;
}

// Выводит массив в консоль
function alert_arr(a, title){
	console.log(title);
	console.log("Array Elements:");
	maxA = a.length;
	for (var i = 0; i < maxA; i++){
		console.log(a[i]);
	}
	console.log("__________________\n\n");
}

// Переворачивает элементы в строке
function reverse_string(a, iReverse){
	var reversing_string = a[iReverse];
	var new_line = [];
	var revL = reversing_string.length;
	for (var j = revL - 1; j >= 0; j--){
		new_line.push(a[iReverse][j]);
	}
	a[iReverse] = new_line;
}

// меняет местами строки с индексами iFirst и iSecond в массиве а
function exchange_strings(a, iFirst, iSecond){
	var first_line = a[iFirst];
	a[iFirst] = a[iSecond];
	a[iSecond] = first_line;
}

// удаляет строку и столбец, на пересечении которых находится минимальный элемент массива а
function delete_line_column_on_min(a){
	var iMin = 0,
			jMin = 0,
			min = a[0][0];
	// Находим минимум
	for (var i = 0; i < a.length; i++){
		for (var j = 0; j < a[0].length; j++){
			if (a[i][j] < min) {
				iMin = i;
				jMin = j;
				min = a[i][j];
			}
		}	
	}

	// Вырезаем столбец и строку
	var newArr = [];
	for (var i = 0; i < a.length; i++){
		var newLine = [];
		for (var j = 0; j < a[0].length; j++){
			if ((j != jMin) && (i != iMin)){
				newLine.push(a[i][j]);
			}
		}	
		if (i != iMin)
			newArr.push(newLine);
	}
	return newArr;
}

// создание массива из строки
function create_string_array(){
	var b = [];
	sInput = prompt("Input array: ", "5 3 4 ,1 2 3 ,5 8 1 .");
	var strings = sInput.split(",");
	loop1:
	for (var i = 0; i < strings.length; i++){
		var arr_line = strings[i].split(" ");
		var new_line = [];
		for (var j = 0; j < arr_line.length - 1; j++){
			if (arr_line == ".")
				break loop1;
			new_line.push(+arr_line[j]);
		}
		b.push(new_line);
	}
	return b;
}

// перемножение массивов. возвращает итоговый массив. 
// количество столбцов первого должно быть равно количеству строк второго массива
function multiply_arrays(a, b){
	var multiplication = [];
	for (var i = 0; i < a.length; i++){
		var cur_line = [];
		for (var j = 0; j < b[0].length; j++){
			var curElement = 0;
			for (var jj = 0; jj < a[0].length; jj++)
				curElement += a[i][jj] * b[jj][j];
			cur_line.push(curElement);
		}
		multiplication.push(cur_line);
	}

	return multiplication;
}