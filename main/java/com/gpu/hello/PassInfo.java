package com.gpu.hello;

public class PassInfo {
	
	private int location;
	private String color;
	private boolean turn;
	
	public PassInfo() {
	}

	public PassInfo(int location, String color, boolean turn) {
		this.location = location;
		this.color = color;
		this.turn = turn;
	}

	public int getLocation() {
		return location;
	}

	public void setLocation(int location) {
		this.location = location;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public boolean getTurn() {
		return turn;
	}

	public void setTurn(boolean turn) {
		this.turn = turn;
	}
}
