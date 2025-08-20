package JavaProblem;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class 문제1 {
	private static Scanner sc=new Scanner(System.in); 	// 사용자 입력을 받기 위한 Scanner
	private static List<String> wordList=new ArrayList<String>(); // 단어를 저장할 리스트 (동적으로 크기 변동 가능)
	
	// 리스트 정렬 메서드
	public static void sort(boolean isAsend) {
		if(isAsend) { 	// isAsend == true → 오름차순, false → 내림차순
			Collections.sort(wordList);		// Collections 클래스 사용 : 리스트 정렬(오름차순, 내림차순)
			System.out.println("오름차순 정렬 실행 완료");
		} else {
			Collections.sort(wordList, Collections.reverseOrder()); 
			// Collections.reverseOrder() 사용 : ArrayList에서는 sort 후에 reverse를 사용해 배열의 순서를 반대로 받게해 내림차순 정렬
			System.out.println("내림차순 정렬 실행 완료");
		}
	}
	
	// 단어 추가 메서드
	public static void add(String word) {
		if(wordList.contains(word)) {	// Contains() : 사용자가 입력한 "word"문자열이 "wordlist" 리스트에 존재하면 true
			System.out.println(word+" 은(는) 이미 존재합니다!");
	    } else {
	        wordList.add(word); // add() : "wordlist" 리스트에 사용자가 입력한 "word" 문자열 추가
	        System.out.println(word+" 단어 추가 완료!");
	    }
	}
	
	// 단어 리스트 출력 메서드
	public static void show() {
		if(wordList.isEmpty()) { // 비어있으면 메시지 출력
			System.out.println("리스트가 비어있습니다.");
		} else {
			System.out.println("┏━━━━━ 리스트 목록 ↓ ━━━━━┓");
			for(String word : wordList) {
				System.out.printf("\t %s\n",word); // 단어 출력
			}
			System.out.println("┗━━━━━━━━━━━━━━━━━━━━━━┛");
		}
	}
	
	public static void main(String[] args) {
		int n=0;
		while(true) {
			System.out.println("--------------M E N U--------------");
			System.out.println("1 추가");
			System.out.println("2 정렬");
			System.out.println("3 확인");
			System.out.println("4 종료");
			System.out.println("--------------M E N U--------------");
			System.out.print("번호 : ");
			
			n=sc.nextInt();
			
			switch(n) {
			case 1:
				System.out.print("단어 입력 : ");
				String word=sc.next();
				add(word);
				break;
			case 2:
				System.out.print("오름차순 여부(1:오름차순, 0:내림차순) : ");
				int no=sc.nextInt();
				if(no==1) sort(true); else sort(false);
				break;
			case 3:
				show();
				break;
			case 4:
				System.out.println("종료합니다");
				System.exit(-1);
				break;
			default:
				System.out.println("다시입력 하세요");
			}
		}
	}
}
