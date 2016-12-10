function main(){
	// 1
	var a = generate_random_array(3,4,10,0,1000);
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

	// 5
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

function exchange_strings(a, iFirst, iSecond){
	var first_line = a[iFirst];
	a[iFirst] = a[iSecond];
	a[iSecond] = first_line;
}

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